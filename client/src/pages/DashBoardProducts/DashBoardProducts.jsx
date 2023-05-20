const DashBoardProducts = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "90%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "95%",
          height: "90%",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          boxShadow: "4px 3px 10px 4px #4644442b",
          borderRadius: 25,
        }}
      >
        <div
          style={{
            height: "30%",
            width: "95%",
            backgroundColor: "red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            padding: 30,
          }}
        >
          <div
            style={{
              width: 300,
              height: 160,
              backgroundColor: "blue",
              borderRadius: 20,
            }}
          >
            <h1>test</h1>
          </div>
          <div
            style={{
              width: 300,
              height: 160,
              backgroundColor: "blue",
              borderRadius: 20,
            }}
          >
            <h1>test</h1>
          </div>
          <div
            style={{
              width: 500,
              height: 160,
              backgroundColor: "blue",
              borderRadius: 20,
            }}
          >
            <h1>test</h1>
          </div>

          <div
            style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'end',
              justifyContent:'flex-end',
              padding:10,
              width: 500,
              height: 160,
              backgroundColor: "blue",
              borderRadius: 20,
            }}
          >
            <button >TEST</button>
          </div>
        </div>
        <div
          style={{
            height: "10%",
            width: "95%",
            backgroundColor: "red",
          }}
        >
          <h1>hola</h1>
        </div>
        <div
          style={{
            height: "60%",
            width: "95%",
            backgroundColor: "red",
          }}
        >
          <h1>hola</h1>
        </div>
      </div>
    </div>
  );
};

export default DashBoardProducts;
