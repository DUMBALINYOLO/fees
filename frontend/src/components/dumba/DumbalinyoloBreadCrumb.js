import React from "react";
import { Breadcrumbs, Link, Typography, makeStyles } from "@material-ui/core";
import NavLinkAdapter from "./NavLinkAdapter";
import { Badge } from 'primereact/badge';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 20,
    display: "flex",
    alignItems: "flex-column",
  }
}));

const OftadehBreadcrumbs = props => {
  const { path } = props;
  const classes = useStyles();

  const pathName = path.location.pathname.split("/");
  const lastRoute = pathName.splice(-1, 1);

  return (
    <div className={classes.root}>
      <Breadcrumbs aria-label="breadcrumb">
        {pathName.length > 1 &&
          pathName.map((item, index) => (
            <Link
              key={index}
              component={NavLinkAdapter}
              to={pathName.join("/")}
              activeClassName="active"
              exact={true}
              color="inherit"
            >
              {item === "" ?  <Badge value="dashboard" severity="success"/>: <Badge value={item} severity="success" />}
            </Link>
          ))}


      </Breadcrumbs>
    </div>
  );
};

export default OftadehBreadcrumbs;
