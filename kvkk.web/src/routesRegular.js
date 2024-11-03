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
import ViewListIcon from '@material-ui/icons/ViewList';
import GavelIcon from '@material-ui/icons/Gavel';
import BusinessIcon from '@material-ui/icons/Business';
import DnsIcon from '@material-ui/icons/Dns';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
// core components/views for Admin layout
import DashboardPage from "../src/views/Dashboard/Dashboard";
import UserProfile from "../src/views/UserProfile/MyProfile";
import Kartvizitlerim from "../src/views/TableList/Kartvizitlerim.js";
import KartvizitEkleme from "../src/views/KartvizitEkleme/KartvizitEkleme.js";
import KullaniciKartvizitIstekListesi from '../src/views/TableList/KullaniciIstekListesi';
import TumKartvizitler from '../src/views/TableList/TumKartvizitler';
import KurumBirimEklemeForm from "./views/KartvizitEkleme/KurumBirimEklemeForm.js";
/*import kvkk from "../src/views/UserProfile/KVVKPdfView"*/

// core components/views for RTL layout





const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Gosterge Paneli",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/adminreg",
    },

    {
        path: "/kullanici",
        name: "Kullanıcı Profili",
        rtlName: "ملف تعريفي للمستخدم",
        icon: Person,
        component: UserProfile,
        layout: "/adminreg",
    },

    {
        path: "/kartvizitekleme",
        name: "Kartvizit Ekleme",
        rtlName: "قائمة الجدول",
        icon: PlaylistAddIcon,
        component: KartvizitEkleme,
        layout: "/adminreg",
    },


    {
        path: "/kartvizitlerim",
        name: "Kartvizitlerim",
        rtlName: "قائمة الجدول",
        icon: DnsIcon,
        component: Kartvizitlerim,
        layout: "/adminreg",
    },

    {
        path: "/tum-kartvizitler",
        name: "Tüm Kartvizitler",
        rtlName: "قائمة الجدول",
        icon: DnsIcon,
        component: TumKartvizitler,
        layout: "/adminreg",
    },

    {
        path: "/isteklistem",
        name: "Istek Listem",
        rtlName: "قائمة الجدول",
        icon: ViewListIcon,
        component: KullaniciKartvizitIstekListesi,
        layout: "/adminreg",
    },

    //{
    //    path: "/kvvk/mevzuat",
    //    name: "KVKK Mevzuat",
    //    rtlName: "قائمة الجدول",
    //    icon: GavelIcon,
    //    component: Linking.openURL('https://www.mevzuat.gov.tr/mevzuat?MevzuatNo=6698&MevzuatTur=1&MevzuatTertip=5'),
    //    layout: "/adminreg",
    //},


];

export default dashboardRoutes;
