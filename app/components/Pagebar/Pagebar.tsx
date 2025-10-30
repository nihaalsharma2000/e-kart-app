"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Breadcrumbs, Typography } from "@mui/material";
import Link from "next/link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import "./Pagebar.css";

function Pagebar() {
  const pathname = usePathname();

  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment && segment.trim() !== "");

  const breadcrumbPaths = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    const name = decodeURIComponent(segment)
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    return { name, href };
  });

  const pageName =
    breadcrumbPaths.length > 0
      ? breadcrumbPaths[breadcrumbPaths.length - 1].name
      : "Home";

  return (
    <>
      {pageName !== "Home" ? (
        <div className="pagebar-wrapper">
        <div className="container pagebar">
          <h1 className="page-heading">{pageName}</h1>

          <div className="breadcrumb-container">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              <Link
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#6b7280",
                  fontWeight: 500,
                }}
              >
                Home
              </Link>

              {breadcrumbPaths.map((crumb, index) =>
                index === breadcrumbPaths.length - 1 ? (
                  <Typography key={index} color="text.primary">
                    {crumb.name}
                  </Typography>
                ) : (
                  <Link
                    key={index}
                    href={crumb.href}
                    style={{
                      textDecoration: "none",
                      color: "#6b7280",
                      fontWeight: 500,
                    }}
                  >
                    {crumb.name}
                  </Link>
                )
              )}
            </Breadcrumbs>
          </div>
        </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Pagebar;
