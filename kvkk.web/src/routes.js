/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import BusinessIcon from '@material-ui/icons/Business';
import DnsIcon from '@material-ui/icons/Dns';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
// core components/views for Admin layout
import DashboardPage from "../src/views/Dashboard/Dashboard";
import UserProfile from "../src/views/UserProfile/UserProfile.js";

import Kartvizitlerim from "../src/views/TableList/Kartvizitlerim.js";
import KartvizitEkleme from "../src/views/KartvizitEkleme/KartvizitEkleme.js";

import KurumBirimEklemeForm from "./views/KartvizitEkleme/KurumBirimEklemeForm.js";

import AllKullaniciTableList from '../src/views/TableList/AllKullaniciTableList';
import TumKartvizitlerAdmin from '../src/views/TableList/TumKartvizitlerAdmin';
import KullaniciTable from '../src/views/TableList/KullaniciTable';
import TumKartivitlerTableList from '../src/views/TableList/TumKartvizitlerTableList';
import IstekListesi from '../src/views/TableList/AdminIstekListesi'


// core components/views for RTL layout





const dashboardRoutes = [
    {
        path: "/gostergepaneli",
        name: "Gosterge Paneli",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin",
    },
    
    {
        path: "/kartvizitekleme",
        name: "Kartvizit Ekleme",
        rtlName: "قائمة الجدول",
        icon: PlaylistAddIcon,
        component: KartvizitEkleme,
        layout: "/admin",
    },

    {
        path: "/kurumvebirimekleme",
        name: "Kurum & Birim Ekleme",
        rtlName: "قائمة الجدول",
        icon: BusinessIcon,
        component: KurumBirimEklemeForm,
        layout: "/admin",

    },
    
    {
        path: "/kartvizitlerim",
        name: "Kartvizit Deposu",
        rtlName: "قائمة الجدول",
        icon: DnsIcon,
        component: TumKartvizitlerAdmin,
        layout: "/admin",
    },
    {
        path: "/kullanicilar",
        name: "Tüm Kullanicilar",
        rtlName: "قائمة الجدول",
        icon: SupervisorAccountIcon,
        component: KullaniciTable,
        layout: "/admin",
    },
    {
        path: "/table/kartvizitlistesi",
        name: "Kartvizitler Tablosu",
        rtlName: "قائمة الجدول",
        icon: DnsIcon,
        component: TumKartivitlerTableList,
        layout: "/admin",
    },
    {
        path: "/table/istekListesi",
        name: "Istek Listesi",
        rtlName: "قائمة الجدول",
        icon: DnsIcon,
        component: IstekListesi,
        layout: "/admin",
    },
    


    
];

export default dashboardRoutes;
