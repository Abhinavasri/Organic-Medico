// /components/CustomizedBreadcrumbs.tsx
"use client";
import React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For dynamic breadcrumb generation

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}) as typeof Chip;

export default function CustomizedBreadcrumbs() {
  const pathname = usePathname(); 
  if (!pathname) return null;
  const pathnames = pathname.split('/').filter((x) => x); 

  const generateLabel = (segment: string, isLast: boolean) => {
    switch (segment) {
      case 'product-listing':
        return 'Product Listing';
      case 'cart':
        return 'Cart';
      default:
        if (!isNaN(Number(segment)) || /^[a-fA-F0-9-]{24,}$/.test(segment)) {
          return isLast ? 'Product Details' : ''; 
        }
        return segment.charAt(0).toUpperCase() + segment.slice(1);
    }
  };

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* Home breadcrumb */}
      <Link href="/" passHref>
        <StyledBreadcrumb
          component="a"
          label="Home"
          icon={<HomeIcon fontSize="small" />}
        />
      </Link>

      {/* Dynamic breadcrumbs */}
      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`; 

        const label = generateLabel(value, last);  
        if (!label) return null;

        return last ? (
          <StyledBreadcrumb
            key={to}
            label={label}
            deleteIcon={<ExpandMoreIcon />}
          />
        ) : (
          <Link href={to} passHref key={to}>
            <StyledBreadcrumb component="a" label={label} />
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}

