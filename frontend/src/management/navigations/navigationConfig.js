import React from 'react';

import CategoryIcon from '@material-ui/icons/Category';
import {
  FiUsers
} from "react-icons/fi";
import {
  BsPeopleFill,
  BsFillFolderFill,
  BsBagFill,
  BsTvFill,
  BsGraphUp,
  BsBook,
  BsCameraVideo,
  BsEnvelopeOpenFill,
  BsBarChartFill,
  BsCollectionPlayFill,
  BsFillAlarmFill,
  BsAwardFill,
  BsChatQuote,
  BsCursorFill
} from "react-icons/bs";


const navigationConfig = [
  {
    id: "Main",
    type: "group",
    children: [
      {
        id: "user",
        title: "USERS",
        type: "collapse",
        icon: <BsPeopleFill />,
        children: [
          {
            id: "user",
            title: "USERS",
            type: "item",
            url: '/managementdashboard/users',
            exact: true,
          },

        ],
      },
      {
        id: "accounts",
        title: "ACCOUNTING",
        type: "collapse",
        icon: <BsFillFolderFill />,
        children: [
          {
            id: "accounts",
            title: "ACCOUNTS",
            type: "item",
            url: '/managementdashboard/accounts',
            exact: true,
          },
          {
            id: "configurations",
            title: "CONFIGURATIONS",
            type: "item",
            url: '/managementdashboard/configurations',
            exact: true,
          },
          {
            id: "bills",
            title: "BILLS",
            type: "item",
            url: '/managementdashboard/bills',
            exact: true,
          },
          {
            id: "book keeping",
            title: "BOOK KEEPING",
            type: "item",
            url: '/managementdashboard/book-keeping',
            exact: true,
          },
          {
            id: "assets",
            title: "ASSETS",
            type: "item",
            url: '/managementdashboard/assets',
            exact: true,
          },
        ],
      },
      {
        id: "inventory",
        title: "INVENTORY",
        type: "collapse",
        icon: <BsBagFill/>,
        children: [
          {
            id: "configurations",
            title: "CONFIGURATIONS",
            type: "item",
            url: '/managementdashboard/inventory-configurations',
            exact: true,
          },
          {
            id: "warehouses",
            title: "WAREHOUSES",
            type: "item",
            url: '/managementdashboard/warehouses',
            exact: true,
          },
          {
            id: "suppliers",
            title: "SUPPLIERS",
            type: "item",
            url: '/managementdashboard/suppliers',
            exact: true,
          },
          {
            id: "products",
            title: "PRODUCTS",
            type: "item",
            url: '/managementdashboard/inventory',
            exact: true,
          },
          {
            id: "orders",
            title: "ORDERS",
            type: "item",
            url: '/managementdashboard/inventory-orders',
            exact: true,
          },
        ],
      },
      {
        id: "invoice",
        title: "ORDERS",
        type: "collapse",
        icon: <BsGraphUp />,
        children: [
          {
            id: "invoice",
            title: "INVOICES",
            type: "item",
            url: '/managementdashboard/invoices',
            exact: true,
          },
          {
            id: "invoice",
            title: "ORDERS",
            type: "item",
            url: '/managementdashboard/customer-orders',
            exact: true,
          },
        ],
      },
      {
        id: "publication",
        title: "PUBLICATIONS",
        type: "collapse",
        icon: <BsBook />,
        children: [
          {
            id: "publication",
            title: "PUBLICATIONS",
            type: "item",
            url: '/managementdashboard/publications',
            exact: true,
          },
        ],
      },


      {
        id: "company",
        title: "ADVERTS",
        type: "collapse",
        icon: <BsCameraVideo />,
        children: [
          {
            id: "adverts",
            title: "ADS",
            type: "item",
            url: '/managementdashboard/adverts/upcomingadverts',
            exact: true,
          },
        ],
      },

      {
        id: "ticketing",
        title: "TICKETING",
        type: "collapse",
        icon: <BsChatQuote/>,
        children: [
          {
            id: "tickets",
            title: "TICKETS",
            type: "item",
            url: '/managementdashboard/tickets',
            exact: true,
          },
        ],
      },
      {
        id: "tickets",
        title: "ASSIGNED TICKETS",
        type: "collapse",
        icon: <BsChatQuote/>,
        children: [
          {
            id: "assigned",
            title: "ASSIGNED TICKETS",
            type: "item",
            url: '/managementdashboard/assigned-tickets',
            exact: true,
          },
        ],
      },
      {
        id: "team",
        title: "TEAM",
        type: "collapse",
        icon: <FiUsers/>,
        children: [
          {
            id: "team",
            title: "TEAM",
            type: "item",
            url: '/managementdashboard/staff-users',
            exact: true,
          },
        ],
      },
      {
        id: "services",
        title: "SERVICES",
        type: "collapse",
        icon: <BsCollectionPlayFill/>,
        children: [
          {
            id: "services",
            title: "SERVICES",
            type: "item",
            url: '/managementdashboard/services',
            exact: true,
          },
        ],
      },
      {
        id: "blogs",
        title: "BLOGS",
        type: "collapse",
        icon: <BsAwardFill/>,
        children: [
          {
            id: "blogs",
            title: "BLOGS",
            type: "item",
            url: '/managementdashboard/blogs',
            exact: true,
          },
        ],
      },
      {
        id: "enquiries",
        title: "ENQUIRIES",
        type: "collapse",
        icon: <BsEnvelopeOpenFill/>,
        children: [
          {
            id: "enquiries",
            title: "ENQUIRIES",
            type: "item",
            url: '/managementdashboard/enquiries',
            exact: true,
          },
        ],
      },

    ],
  },
];

export default navigationConfig;
