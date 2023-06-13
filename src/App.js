import logo from "./logo.svg";
import "./App.css";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import ima from "./image/optech.png"
import { PDFDownloadLink } from "@react-pdf/renderer";
import Roboto from "./Roboto/Roboto-Bold.ttf"

function App() {
  const styles = StyleSheet.create({
    page: { backgroundColor: "#FAEBD7", fontFamily: "Roboto" },
    section: { textAlign: "center", margin: 30 },
  });
  Font.register({
    family: "Roboto",
    src: Roboto,
  });
  // Create Document Component MyDocument
  const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View
          style={{
            border: 2,
            margin: 30,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 40,
              justifyContent: "space-between",
              borderBottom: "2px",
            }}
          >
            <Image
              src={ima}
              style={{
                width: "auto",
                height: "50px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
            <Text>Hóa đơn</Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 40,
              justifyContent: "space-between",
              borderBottom: "2px",
            }}
          >
            <View>
              <Text>Optech</Text>
              <Text
                style={{
                  width: "40%",
                  fontSize: "10",
                  marginTop: 10,
                }}
              >
                với hàng trăm mẫu giao diện thiết kế chuyên nghiệp, đa dạng
                nhiều lĩnh vực, tích hợp đầy đủ tính năng giúp bạn dễ dàng thao
                tác quản lý.
              </Text>
            </View>
            <View>
              <Text>Hóa đơn</Text>
              <Text
                style={{
                  width: "40%",
                  fontSize: "10",
                  marginTop: 10,
                }}
              >
                25/03/2023
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: 2,
            }}
          >
            <View
              style={{
                width: "70%",
                borderRight: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 30,
              }}
            >
              <Text>Mục</Text>
              <Text>Sô lượng</Text>
              <Text>Thành tiền</Text>
            </View>
            <View
              style={{
                width: "30%",
                padding: 30,
              }}
            >
              <Text>Thành tiền</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: 2,
            }}
          >
            <View
              style={{
                width: "70%",
                borderRight: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 30,
              }}
            >
              <Text>Bia</Text>
              <Text>48</Text>
              <Text>300</Text>
            </View>
            <View
              style={{
                width: "30%",
                padding: 30,
              }}
            >
              <Text>300</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: 2,
            }}
          >
            <View
              style={{
                width: "70%",
                borderRight: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 30,
              }}
            >
              <Text>gà</Text>
              <Text>3</Text>
              <Text>300</Text>
            </View>
            <View
              style={{
                width: "30%",
                padding: 30,
              }}
            >
              <Text>300</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              borderBottom: 2,
            }}
          >
            <View
              style={{
                width: "70%",
                borderRight: 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 30,
              }}
            >
              <Text>gà</Text>
              <Text>3</Text>
              <Text>300</Text>
            </View>
            <View
              style={{
                width: "30%",
                padding: 30,
              }}
            >
              <Text>300</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              padding: 40,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text>Thông tin thanh toán</Text>
              <Text
                style={{
                  width: "40%",
                  fontSize: "10",
                  marginTop: 10,
                }}
              >
                Ngân hàng VIB
              </Text>
              <Text
                style={{
                  fontSize: "10",
                }}
              >
                Tên tài khoản: Công ty Vũ An
              </Text>
              <Text
                style={{
                  fontSize: "10",
                }}
              >
                Số tài khoản: 123-456-7890
              </Text>
              <Text
                style={{
                  fontSize: "10",
                }}
              >
                Ngày thanh toán: 16/01/2026
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: "10" }}>
                Tổng cộng: 8.000.000đ Thuế (0%): 0đ
              </Text>
              <Text
                style={{
                  width: "40%",
                  fontSize: "10",
                  marginTop: 10,
                }}
              >
                25/03/2023
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );

  return (
    <div className="App">
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        
          <PDFDownloadLink
            style={{ textDecoration: "none",color:'white',padding: "10px",
            backgroundColor: "#0dcaf0",
            borderColor: "#0dcaf0", }}
            document={<MyDocument />}
            fileName="bao.pdf"
          >
            {({ blob, url, loading, error }) =>
              loading ? "Generating PDF..." : "Xuất PDF"
            }
          </PDFDownloadLink>
        
      </div>
    </div>
  );
}

export default App;
