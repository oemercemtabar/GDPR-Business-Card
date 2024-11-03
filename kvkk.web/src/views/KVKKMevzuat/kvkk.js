import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import Card from "../../components/Card/Card";
import CardHeader from "../../components/Card/CardHeader.js";
import CardBody from "../../components/Card/CardBody.js";

const styles = {
    typo: {
        paddingLeft: "25%",
        marginBottom: "20px",
        position: "relative",
    },
    note: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        bottom: "10px",
        color: "#c0c1c2",
        display: "block",
        fontWeight: "400",
        fontSize: "13px",
        lineHeight: "13px",
        left: "0",
        marginLeft: "5px",
        position: "absolute",
        width: "260px",
    },
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0",
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
    },
};

const useStyles = makeStyles(styles);

export default function KvkkPage() {
    const classes = useStyles();
    return (
        <Card>
            <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Material Dashboard Heading</h4>
                <p className={classes.cardCategoryWhite}>
                    Created using Roboto Font Family
        </p>
            </CardHeader>
            <CardBody>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        (1) Bu Kanunun amacı, kişisel verilerin işlenmesinde başta özel hayatın gizliliği olmak üzere kişilerin temel hak ve özgürlüklerini korumak ve kişisel verileri işleyen gerçek ve tüzel kişilerin yükümlülükleri ile uyacakları usul ve esasları düzenlemektir.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 2</div>
                    <p>
                        (1) Bu Kanun hükümleri, kişisel verileri işlenen gerçek kişiler ile bu verileri tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla işleyen gerçek ve tüzel kişiler hakkında uygulanır.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        (1) Bu Kanunun uygulanmasında;

                        a) Açık rıza: Belirli bir konuya ilişkin, bilgilendirilmeye dayanan ve özgür iradeyle açıklanan rızayı,

                        b) Anonim hâle getirme: Kişisel verilerin, başka verilerle eşleştirilerek dahi hiçbir surette kimliği belirli veya belirlenebilir bir gerçek kişiyle ilişkilendirilemeyecek hâle getirilmesini,

                        c) Başkan: Kişisel Verileri Koruma Kurumu Başkanını,

                        ç) İlgili kişi: Kişisel verisi işlenen gerçek kişiyi,

                        d) Kişisel veri: Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgiyi,

                        e) Kişisel verilerin işlenmesi: Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi, depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması, devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi veriler üzerinde gerçekleştirilen her türlü işlemi,

                        f) Kurul: Kişisel Verileri Koruma Kurulunu,

                        g) Kurum: Kişisel Verileri Koruma Kurumunu,

                        ğ) Veri işleyen: Veri sorumlusunun verdiği yetkiye dayanarak onun adına kişisel verileri işleyen gerçek veya tüzel kişiyi,
                    </p>
                    
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                <div className={classes.typo}>
                    <div className={classes.note}>MADDE 1</div>
                    <p>
                        I will be the leader of a company that ends up being worth billions
                        of dollars, because I got the answers. I understand culture. I am
                        the nucleus. I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that things could
                        be at.
                    </p>
                </div>
                
                
                
                
            </CardBody>
        </Card>
    );
}
