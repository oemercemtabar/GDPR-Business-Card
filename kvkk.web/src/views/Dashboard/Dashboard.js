import React, { useEffect, useState } from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

import Policy from "@material-ui/icons/Policy";

import DateRange from "@material-ui/icons/DateRange";


import AccessTime from "@material-ui/icons/AccessTime";

// core components
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer.js";
import Table from "../../components/Table/Table.js";
import Tasks from "../../components/Tasks/Tasks.js";
import CustomTabs from "../../components/CustomTabs/CustomTabs.js";

import Card from "../../components/Card/Card.js";
import CardHeader from "../../components/Card/CardHeader.js";
import CardIcon from "../../components/Card/CardIcon.js";
import CardBody from "../../components/Card/CardBody.js";
import CardFooter from "../../components/Card/CardFooter.js";

import { birinci, ikinci, ucuncu, dorduncu, besinci, altinci, yedinci} from "../../variables/general";

import {
    dailySalesChart,
    emailsSubscriptionChart,
    completedTasksChart,
} from "../../variables/charts";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const [kullaniciList, setKullaniciList] = useState([]);
    const [kartvizitList, setKartvizitList] = useState([]);
    const [kurumList, setKurumList] = useState([]);
    const [birimList, setBirimList] = useState([]);

    useEffect(() => {
        getKullaniciListFromAPI();
        getKartvizitListFromAPI();
        getKurumListFromAPI();
        getBirimListFromAPI();
    }, []);

    const getKullaniciListFromAPI = async () => {
        return fetch('https://localhost:44381/api/Kullanici/butun-kullanıcılar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kullanicilar: ", json);
                setKullaniciList(json);
            }).catch((error) => {
                console.error(error);
            });
    };
    const getKartvizitListFromAPI = async () => {
        return fetch('https://localhost:44381/api/Kartvizit/butun-kartvizitler', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kartvizits: ", json);
                setKartvizitList(json);
            }).catch((error) => {
                console.error(error);
            });
    };
    const getKurumListFromAPI = async () => {
        return fetch('https://localhost:44381/api/Kurum/butun-kurumlar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Kurumlar: ", json);
                setKurumList(json);
            }).catch((error) => {
                console.error(error);
            });
    };
    const getBirimListFromAPI = async () => {
        return fetch('https://localhost:44381/api/Birim/butun-birimler', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

                Accept: 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                console.log("List of Birimler: ", json);
                setBirimList(json);
            }).catch((error) => {
                console.error(error);
            });
    };
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="warning">
                                <Icon>Aktif Kullanıcı</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Aktif Sayı </p>
                            <h3 className={classes.cardTitle}>
                                {kullaniciList.length}
                            </h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                14/06/2021 'den beri
                                
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Icon>Aktif Kartvizit</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Kartvizit Sayısı</p>
                            <h3 className={classes.cardTitle}>{kartvizitList.length}</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                14/06/2021 'den beri
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Icon>Aktif Kurum</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Kurum Sayısı</p>
                            <h3 className={classes.cardTitle}>{ kurumList.length}</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                14/06/2021 'den beri
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon>Aktif Birim</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Birim Sayısı</p>
                            <h3 className={classes.cardTitle}>{ birimList.length}</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                14/06/2021 'den beri
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            {/*<GridContainer>*/}
            {/*    <GridItem xs={12} sm={12} md={4}>*/}
            {/*        <Card chart>*/}
            {/*            <CardHeader color="success">*/}
            {/*                <ChartistGraph*/}
            {/*                    className="ct-chart"*/}
            {/*                    data={emailsSubscriptionChart.data}*/}
            {/*                    type="Bar"*/}
            {/*                    options={emailsSubscriptionChart.options}*/}
            {/*                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}*/}
            {/*                    listener={emailsSubscriptionChart.animation}*/}
            {/*                />*/}
            {/*            </CardHeader>*/}
            {/*            <CardBody>*/}
            {/*                <h4 className={classes.cardTitle}>Yeni Kartvizit Girişleri</h4>*/}
            {/*                <p className={classes.cardCategory}>Aylara Göre Kartvizit Girişleri</p>*/}
            {/*            </CardBody>*/}
            {/*            <CardFooter chart>*/}
            {/*                <div className={classes.stats}>*/}
            {/*                    <AccessTime /> Kartvizit Uygulaması Güncel Verileri*/}
            {/*                </div>*/}
            {/*            </CardFooter>*/}
            {/*        </Card>*/}
            {/*    </GridItem>*/}
            {/*    <GridItem xs={12} sm={12} md={4}>*/}
            {/*        <Card chart>*/}
            {/*            <CardHeader color="warning">*/}
            {/*                <ChartistGraph*/}
            {/*                    className="ct-chart"*/}
            {/*                    data={emailsSubscriptionChart.data}*/}
            {/*                    type="Bar"*/}
            {/*                    options={emailsSubscriptionChart.options}*/}
            {/*                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}*/}
            {/*                    listener={emailsSubscriptionChart.animation}*/}
            {/*                />*/}
            {/*            </CardHeader>*/}
            {/*            <CardBody>*/}
            {/*                <h4 className={classes.cardTitle}>Yeni Kurum Girişleri</h4>*/}
            {/*                <p className={classes.cardCategory}>Aylara Göre Kurum Girişleri</p>*/}
            {/*            </CardBody>*/}
            {/*            <CardFooter chart>*/}
            {/*                <div className={classes.stats}>*/}
            {/*                    <AccessTime /> Kartvizit Uygulaması Güncel Verileri*/}
            {/*                </div>*/}
            {/*            </CardFooter>*/}
            {/*        </Card>*/}
            {/*    </GridItem>*/}
            {/*    <GridItem xs={12} sm={12} md={4}>*/}
            {/*        <Card chart>*/}
            {/*            <CardHeader color="danger">*/}
            {/*                <ChartistGraph*/}
            {/*                    className="ct-chart"*/}
            {/*                    data={emailsSubscriptionChart.data}*/}
            {/*                    type="Bar"*/}
            {/*                    options={emailsSubscriptionChart.options}*/}
            {/*                    responsiveOptions={emailsSubscriptionChart.responsiveOptions}*/}
            {/*                    listener={emailsSubscriptionChart.animation}*/}
            {/*                />*/}
            {/*            </CardHeader>*/}
            {/*            <CardBody>*/}
            {/*                <h4 className={classes.cardTitle}>Yeni Kullanıcı Girişleri</h4>*/}
            {/*                <p className={classes.cardCategory}>Aylara Göre Kullanıcı Girişleri</p>*/}
            {/*            </CardBody>*/}
            {/*            <CardFooter chart>*/}
            {/*                <div className={classes.stats}>*/}
            {/*                    <AccessTime /> Kartvizit Uygulaması Güncel Verileri*/}
            {/*                </div>*/}
            {/*            </CardFooter>*/}
            {/*        </Card>*/}
            {/*    </GridItem>*/}

            {/*</GridContainer>*/}
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <CustomTabs
                        title="KVKK MEVZUAT:"
                        headerColor="primary"
                        tabs={[
                            {
                                tabName: "Birinci Bölüm",
                                tabIcon: Policy,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 2]}
                                        tasksIndexes={[0, 1, 2]}
                                        tasks={birinci}
                                    />

                                ),
                            },
                            {
                                tabName: "İkinci Bölüm",
                                tabIcon: Policy,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 5]}
                                        tasksIndexes={[0, 1, 2, 3, 4, 5]}
                                        tasks={ikinci}
                                    />

                                ),
                            },
                            {
                                tabName: "Üçüncü Bölüm",
                                tabIcon: Policy,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 2]}
                                        tasksIndexes={[0, 1, 2]}
                                        tasks={ucuncu}
                                    />

                                ),
                            },
                            {
                                tabName: "Dördüncü Bölüm",
                                tabIcon: Policy,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 3]}
                                        tasksIndexes={[0, 1, 2, 3]}
                                        tasks={dorduncu}
                                    />

                                ),
                            },
                            {
                                tabName: "Beşinci Bölüm",
                                tabIcon: Policy,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 1]}
                                        tasksIndexes={[0, 1]}
                                        tasks={besinci}
                                    />

                                ),
                            },
                            {
                                tabName: "Altıncı Bölüm",
                                tabIcon: Policy,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 8]}
                                        tasksIndexes={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
                                        tasks={altinci}
                                    />

                                ),
                            },
                            {
                                tabName: "Yedinci Bölüm",
                                tabIcon: Policy,
                                tabContent: (
                                    <Tasks
                                        checkedIndexes={[0, 5]}
                                        tasksIndexes={[0, 1, 2, 3, 4, 5]}
                                        tasks={yedinci}
                                    />

                                ),
                            },
                            
                        ]}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                    <Card>
                        <CardHeader color="warning">
                            <h4 className={classes.cardTitleWhite}>Uygulamada Emeği Geçenler</h4>
                            <p className={classes.cardCategoryWhite}>
                                Uygulamada Emeği Geçen Kurum Çalışanları
                            </p>
                        </CardHeader>
                        <CardBody>
                            <Table
                                tableHeaderColor="warning"
                                tableHead={["Ad Soyad", "Kurum", "Birim", "Unvan"]}
                                tableData={[
                                    ["Cüneyt Taşkesen", "Bursa Büyükşehir Belediye", "Akıllı Şehircilik ve Inovasyon Daire Başkanlığı", "Akıllı Şehircilik ve Inovasyon Daire Başkanı"],
                                    ["Turan Alkan", "Bursa Büyükşehir Belediye", "Akıllı Şehircilik ve Inovasyon Daire Başkanlığı", "Akıllı Şehircilik Şube Müdürü"],
                                    ["Murat Ertekin", "Bursa Büyükşehir Belediye", "Akıllı Şehircilik ve Inovasyon Daire Başkanlığı", "Bilgisayar Mühendisi - Elektrik Elektronik Mühendisi"],
                                    ["Ömer Cem Tabar", "Bursa Büyükşehir Belediye", "Akıllı Şehircilik ve Inovasyon Daire Başkanlığı", "Yazılım Mühendisliği Stajyeri"],
                                  
                                ]}
                            />
                        </CardBody>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}
