import { useState } from "react";

function TabsComponent() {
  // Step 3: Manage active tab state
  const [activeTab, setActiveTab] = useState(1);
  console.log("hawlai", activeTab);
  return (
    <div
      style={{
        borderRadius: "6px",
        marginTop: "3.2vw",
        // backgroundColor:"red",
        backgroundImage: "linear-gradient(to right, black, silver)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "70vh",
        width: "75vw",
      }}
    >
      <div className="">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row", width: "80vw" }}>
            <div
              style={{
                width: "50%",
                textAlign: "center",
                borderRadius: "6px",
                paddingTop: "10px",
                height: "3.6vw",
                border: "0.6px solid #808080",
              }}
            >
              <div>
                <a
                  style={{ color: "#e4e4ed", fontSize: "24px" }}
                  onClick={() => setActiveTab(1)}
                >
                  Free access
                </a>
              </div>
            </div>

            <div
              style={{
                width: "50%",
                height: "3.6vw",
                textAlign: "center",
                borderRadius: "6px",
                paddingTop: "10px",
                border: "0.6px solid #808080",
              }}
            >
              <div style={{ height: "2.5vw" }}>
                <a
                  style={{ color: "#e4e4ed", fontSize: "24px" }}
                  onClick={() => setActiveTab(2)}
                >
                  Premium Only Axis
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
        // className="mt-4 p-4 bg-white border rounded-lg shadow"
        >
          {activeTab === 1 && (
            <div style={{ marginLeft: "20px" }}>
              <div
                style={{
                  color: "white",
                  height: "70vh",
                  width: "70vw",
                }}
              >
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    justifyItems: "center",
                  }}
                >
                  <h1
                    style={{
                      color: "#eb5757",
                      fontSize: "14px",
                      fontWeight: "700",
                      marginTop: "20px",
                    }}
                  >
                    PASTE CONTENT HIDDEN
                  </h1>
                  <p
                    style={{
                      color: "#e4e4ed",
                      fontSize: "0.9371 rem",
                      marginTop: "10px",
                    }}
                  >
                    Wait before unlocking this exclusive content to avoid
                  </p>
                  <p
                    style={{
                      color: "#e4e4ed",
                      fontSize: "0.9371 rem",
                    }}
                  >
                    Spam
                  </p>

                  <p
                    style={{
                      color: "#e4e4ed",
                      fontSize: "0.9371 rem",
                    }}
                  >
                    You must wait 15 Minutes...
                  </p>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "15px",
                      marginTop: "20px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#20212E",
                        padding: 5,
                      }}
                    >
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                          fontStyle: "bold",
                          textAlign: "center",
                        }}
                      >
                        11
                      </p>
                      <p
                        style={{
                          color: "#808080",
                          fontSize: "10px",
                          fontStyle: "normal",
                          textAlign: "center",
                        }}
                      >
                        MINUTES
                      </p>
                    </div>

                    <div
                      style={{
                        backgroundColor: "#20212E",
                        padding: 5,
                        textAlign: "center",
                      }}
                    >
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "20px",
                          fontStyle: "bold",
                          textAlign: "center",
                        }}
                      >
                        16
                      </p>
                      <p
                        style={{
                          color: "#808080",
                          fontSize: "10px",
                          fontStyle: "normal",
                        }}
                      >
                        SECONDS
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      width: "34vw",
                      height: "35px",
                      backgroundColor: "#52526F70",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      textAlign: "center",
                      fontSize: "16px",
                      marginTop: "40px",
                    }}
                  >
                    <a>Avoid Ads And Waiting Time</a>
                  </div>

                  <p
                    style={{
                      color: "#FAFAF9",
                      fontSize: "16px",
                      marginTop: "20px",
                    }}
                  >
                    Access now from just $2.50 for 30 days instant access to
                    unlimited exclusive content
                  </p>

                  <div
                    style={{
                      marginTop: "60px",
                      backgroundColor: "#673fd6",
                      fontSize: "16px",
                      // width: "14vw",
                      alignItems: "center",
                      textAlign: "center",
                      borderRadius: "5px",
                      padding: "5px 30px",
                    }}
                  >
                    <a>Skip By going Premium</a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 2 && (
            <div
              style={{
                color: "white",
                height: "400px",
                width: "70vw",
                marginLeft: "3vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  alignItems: "center",
                  // backgroundColor: "white"
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  justifyItems: "center",
                }}
              >
                <h1 style={{ color: "white", fontSize: "21px" }}>
                  Accesss Now With Premium
                </h1>
                <div
                  style={{
                    backgroundColor: "#673fd6",
                    fontSize: "16px",
                    width: "14vw",
                    height: "26px",
                    alignItems: "center",
                    textAlign: "center",
                    borderRadius: "5px",
                    marginTop: "15px",
                  }}
                >
                  <a>Skip By going Premium</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TabsComponent;
