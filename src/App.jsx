import React, { useState } from "react";
import "./style.css";

const App = () => {
  const [data, setdata] = useState({
    sebep: "",
    iletisim_no: "",

    p_tarih: "",
    p_ad_soyad: "",
    p_unvan: "",
    p_imza: "",

    i_tarih: "",
    i_ad_soyad: "",
    i_unvan: "",
    i_imza: "",

    izin_istek_tarihi: "",
    izin_ayrilis_tarihi: "",
    izin_donus_tarihi: "",
    kullanilan_izin_suresi: "",

    des: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Form Data Successfully Sent");
        alert("Form Gönderildi.")
        window.location.reload()
      } else {
        console.error("Failed to send form data");
        alert("Hata!")
        window.location.reload()

      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <body>
      <h3>KISA SÜRELİ (SAATLİK) İZİN FORMU</h3>
      <br />
      <br />
      <form
        className="box_wrapper"
        onSubmit={handleSubmit}
        action="http://localhost:3001/submit-form"
        method="POST"
      >
        <div className="title">PERSONEL VE İZİN BİLGİLERİ</div>
        <div className="box_up_wrapper">
          <div className="in_title">İzin Sebebi</div>
          <input
            type="text"
            name="sebep"
            id=""
            onChange={handleChange}
            value={data.sebep}
          />
        </div>
        <div className="box_up_wrapper">
          <div className="in_title">İletişim Numarası</div>
          <input
            type="text"
            name="iletisim_no"
            id=""
            onChange={handleChange}
            value={data.iletisim_no}
          />
        </div>

        <div className="s_box_wrapper">
          <div className="s_box">
            <div className="what_user">
              <p>Personel</p>
              <p>
                Yukarıda arz ettiğim üzere, "Kısa Süreli (Saatlik) İzine"
                ihtiyacım bulunmaktadır. Takdirlerinize arz ederim.
              </p>
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">Tarih</div>
              <input
                type="text"
                name="p_tarih"
                id=""
                onChange={handleChange}
                value={data.p_tarih}
              />
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">Ad Soyad</div>
              <input
                type="text"
                name="p_ad_soyad"
                id=""
                onChange={handleChange}
                value={data.p_ad_soyad}
              />
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">Unvanı</div>
              <input
                type="text"
                name="p_unvan"
                id=""
                onChange={handleChange}
                value={data.p_unvan}
              />
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">İmza</div>
              <input
                type="text"
                name="p_imza"
                id=""
                onChange={handleChange}
                value={data.p_imza}
              />
            </div>
          </div>
          <div className="s_box">
            <div className="what_user">
              <p>İşveren</p>
              <p>İzne ayrılmasında sakınca yoktur.</p>
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">Tarih</div>
              <input
                type="text"
                name="i_tarih"
                id=""
                onChange={handleChange}
                value={data.i_tarih}
              />
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">Ad Soyad</div>
              <input
                type="text"
                name="i_ad_soyad"
                id=""
                onChange={handleChange}
                value={data.i_ad_soyad}
              />
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">Unvanı</div>
              <input
                type="text"
                name="i_unvan"
                id=""
                onChange={handleChange}
                value={data.i_unvan}
              />
            </div>
            <div className="box_up_wrapper">
              <div className="in_title">İmza</div>
              <input
                type="text"
                name="i_imza"
                id=""
                onChange={handleChange}
                value={data.i_imza}
              />
            </div>
          </div>
        </div>

        <div className="t_box_wrapper">
          <div>
            <p className="in_title_2">İzin İstek Tarihi</p>
            <input
              type="text"
              name="izin_istek_tarihi"
              id=""
              onChange={handleChange}
              value={data.izin_istek_tarihi}
            />
          </div>
          <div>
            <p className="in_title_2">İzine Ayrılış Tarihi</p>
            <input
              type="text"
              name="izin_ayrilis_tarihi"
              id=""
              onChange={handleChange}
              value={data.izin_ayrilis_tarihi}
            />
          </div>
          <div>
            <p className="in_title_2">İzin Dönüş Saati</p>
            <input
              type="text"
              name="izin_donus_tarihi"
              id=""
              onChange={handleChange}
              value={data.izin_donus_tarihi}
            />
          </div>
          <div>
            <p className="in_title_2">Kullanılan İzin Süresi (Saat)</p>
            <input
              type="text"
              name="kullanilan_izin_suresi"
              id=""
              onChange={handleChange}
              value={data.kullanilan_izin_suresi}
            />
          </div>
        </div>

        <div className="f_box_wrapper">
          <div className="des_text">Açıklamalar</div>
          <div className="f_box">
            <textarea
              name="des"
              id=""
              cols="30"
              rows="10"
              onChange={handleChange}
              value={data.des}
            ></textarea>
          </div>
        </div>
        <button type="submit">Gönder</button>
      </form>
    </body>
  );
};

export default App;
