import { useEffect, useState } from "react";
import "../styles/cameraPage.scss";

// 注意事項
// 開始拍照
// --------
// 確定要使用此照片嗎？
// 按下確定，進入 /result 頁面等待資料

// 離開後將不會儲存資料

// 文本區
// cta 開始拍照按鈕
// -----------
// 圖像區
// 確定按鈕/ 重新拍攝按鈕

const CameraPage = () => {
  const [image, setImage] = useState(null);
  const [imageStorage, setImageStorage] = useState(null);
  const [aiData, setAiData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 模擬 圖片儲存庫存取

    if (!image) {
      return new Error("必須要先有相片！");
    } else {
      setImageStorage(image);
      console.log(imageStorage);
      console.log("存取相片至儲存庫成功！");
    }

    // 並沒有加入使用者驗證，一切從最小化可執行開始。
    try {
      // 向後端拿資料

      //   const res = await fetch("/api/image", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({
      //       image,
      //     }),
      //   });

      //   const data = res.json(); // 回傳的AI生成內容

      // 模擬拿到資料
      let data = {
        title: "xxx乳液成分解析",
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, recusandae qui? Quibusdam blanditiis ea, provident enim adipisci alias rerum quas doloremque dolorum cupiditate assumenda, tenetur consectetur, ipsa deserunt autem at. Ratione ea repellat quidem quasi quam? Nobis nihil ab accusantium error praesentium minus doloribus ex porro iure, ipsum eum aut.",
      };
      setAiData(data);
      console.log("end");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(image);
  }, [image]);
  useEffect(() => {
    console.log(aiData);
  }, [aiData]);

  // camera 拍完照片後的圖片讀取
  const handleFilesChange = (e) => {
    console.log("click");
    const file = e.target.files[0]; // 獲取到文件
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target.result); // 將讀取結果設置到 state 中
      };

      reader.readAsDataURL(file); // 讀取文件
    }
  };

  const handleRestart = (e) => {
    e.preventDefault();
    setImage(null);
    setAiData(null);
    setImageStorage(null);
  };

  return (
    <div className="container">
      <section className="textSection">
        <h2>注意事項：</h2>
        <ul>
          <li>將使用行動裝置的相機進行拍照作業</li>
          <li>請盡量將照片文字拍攝清楚。</li>
          <li>請盡量將成分告示佔滿畫面。</li>
        </ul>
      </section>
      <section className="cameraSection">
        {image ? (
          <div className="cameraSection--imageArea">
            <img
              className="imageArea--image"
              src={image}
              alt="剛剛拍下的照片"
            />
          </div>
        ) : (
          <div className="cameraSection--ctaArea">
            <label htmlFor="cameraCta2" className="button-primary">
              開啟後鏡頭
            </label>
            <input
              id="cameraCta2"
              type="file"
              capture="environment"
              accept="image/*"
              onChange={handleFilesChange}
            />
          </div>
        )}
      </section>
      {!aiData && image ? (
        <div>
          <label htmlFor="cameraCta" className="button-primary">
            再次拍攝
          </label>
          <input
            id="cameraCta"
            type="file"
            capture="environment"
            accept="image/*"
            onChange={handleFilesChange}
          />
          <button onClick={handleSubmit}>確定送出</button>
        </div>
      ) : (
        ""
      )}

      {aiData && imageStorage && image ? (
        <button onClick={handleRestart}>重新開始</button>
      ) : (
        ""
      )}

      {/* AI 文本生成區 */}
      {aiData ? (
        <section className="aiSection">
          <h1>Ai 文本生成區</h1>
          <h2>{aiData.title}</h2>
          <p>{aiData.desc}</p>
          {/* 回傳後的 ai生成內容 */}
          {/* 我假設 ai 會生成 html格式 */}
        </section>
      ) : (
        <h1>Ai 文本生成區</h1>
      )}
    </div>
  );
};

export default CameraPage;
