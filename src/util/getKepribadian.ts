export default function getKepribadian(data: any): {
  title: string;
  tentang: string;
  kepribadian: string;
} {
  let kepribadian = "";
  kepribadian += data["Introvert"] > data["Extrovert"] ? "I" : "E";
  kepribadian += data["Intuitive"] > data["Sensing"] ? "N" : "S";
  kepribadian += data["Thinking"] > data["Feeling"] ? "T" : "F";
  kepribadian += data["Judging"] > data["Perceiving"] ? "J" : "P";

  return getKepribadianTentang(kepribadian);
}

function getKepribadianTentang(kepribadian: string): {
  title: string;
  tentang: string;
  kepribadian: string;
} {
  switch (kepribadian) {
    case "ISTJ":
      return {
        title: "Inspector",
        tentang:
          "orang yang rasional, terorganisir, dan tegas. Anda cenderung introvert, mempercayai apa yang terlihat dan terbukti, dan memutuskan sesuatu berdasarkan pemikiran logis Anda. Anda juga dianggap sebagai orang yang tepat waktu dan menyukai ketertiban.",
        kepribadian: kepribadian,
      };

    case "ISFJ":
      return {
        title: "Protector",
        tentang:
          "orang yang perhatian, ramah, dan peduli. Anda cenderung introvert, lebih menggunakan perasaan Anda daripada pemikiran logis dalam membuat keputusan, dan sangat peka terhadap kebutuhan orang lain. Anda juga dianggap sebagai orang yang setia dan baik hati.",
        kepribadian: kepribadian,
      };

    case "INFJ":
      return {
        title: "",
        tentang:
          "orang yang kreatif, visioner, dan empatik. Anda cenderung introvert, menggunakan intuisi Anda untuk memahami orang dan situasi, dan membuat keputusan berdasarkan perasaan Anda. Anda juga dianggap sebagai orang yang peka, emosional, dan idealis.",
        kepribadian: kepribadian,
      };

    case "ISTP":
      return {
        title: "Counselor",
        tentang:
          "orang yang praktis, fleksibel, dan cepat tanggap. Anda cenderung introvert, lebih menggunakan pengamatan dan pemikiran logis dalam menyelesaikan masalah, dan tidak suka terikat pada aturan atau rencana yang sudah ditentukan. Anda juga dianggap sebagai orang yang senang menjelajahi dan mencoba hal-hal baru.",
        kepribadian: kepribadian,
      };
    case "ISFP":
      return {
        title: "Composer",
        tentang:
          "orang yang kreatif, artistik, dan peka terhadap lingkungan sekitarnya. Anda cenderung introvert, lebih menggunakan perasaan dan pengamatan Anda dalam memahami situasi dan orang, dan lebih suka mengikuti aliran daripada terikat pada rencana atau aturan yang sudah ditentukan. Anda juga dianggap sebagai orang yang sensitif, emosional, dan menghargai kebebasan.",
        kepribadian: kepribadian,
      };
    case "INFP":
      return {
        title: "Craftsman",
        tentang:
          "orang yang idealis, kreatif, dan empatik. Anda cenderung introvert, menggunakan intuisi dan perasaan Anda dalam memahami orang dan situasi, dan lebih suka mengikuti aliran daripada terikat pada rencana atau aturan yang sudah ditentukan. Anda juga dianggap sebagai orang yang sensitif, emosional, dan memiliki prinsip-prinsip yang kuat.",
        kepribadian: kepribadian,
      };
    case "INTP":
      return {
        title: "Logician",
        tentang:
          "orang yang cenderung introvert, berfikir secara konseptual dan abstrak, dan senang mengeksplorasi ide-ide baru dan konsep-konsep yang tidak terbatas oleh konvensi-konvensi yang ada. Anda juga cenderung memiliki kemampuan analitis yang tajam dan suka mengeksplorasi masalah-masalah yang kompleks. Namun, Anda biasanya kurang tertarik pada aspek-aspek praktis dari kehidupan sehari-hari dan mungkin kurang terampil dalam mengelola tugas-tugas yang terorganisir dengan baik.",
        kepribadian: kepribadian,
      };
    case "ESTJ" : 
      return {
        title : "Supervisor",
        kepribadian,
        tentang : "orang yang cenderung ekstravert, mengutamakan fakta-fakta yang terperinci dan nyata, dan senang mengatur dan mengorganisir orang lain. Anda cenderung memiliki kemampuan pemecahan masalah yang praktis dan terampil dalam mengelola proyek-proyek yang terstruktur dengan baik. Namun, Anda mungkin kurang tertarik pada ide-ide abstrak atau konsep-konsep yang tidak terkait dengan dunia nyata."
      }
    case "ESFJ" : 
      return {
        title : "Provider",
        kepribadian,
        tentang : "orang yang cenderung ekstravert, mengutamakan emosi dan koneksi interpersonal, dan senang membantu orang lain. Anda cenderung tertarik pada hal-hal praktis yang terkait dengan kehidupan sehari-hari dan suka bekerja dalam lingkungan yang terorganisir dengan baik. Namun, Anda mungkin kurang tertarik pada ide-ide abstrak atau konsep-konsep yang tidak terkait dengan dunia nyata."
      }
    case "ENFJ" : 
      return {
        title : "Mentor",
        kepribadian,
        tentang : "orang yang cenderung ekstravert, mengutamakan emosi dan koneksi interpersonal, dan senang membantu orang lain mencapai potensi terbaik Anda. Anda cenderung memiliki kemampuan komunikasi yang kuat dan dapat dengan mudah memahami perspektif orang lain. Anda juga tertarik pada ide-ide abstrak dan konsep-konsep yang lebih luas, dan sering memiliki visi yang jelas tentang bagaimana dunia seharusnya berjalan. Namun, Anda mungkin kurang terampil dalam mengelola proyek-proyek yang terstruktur dengan baik dan mungkin mengalami kesulitan dalam mengambil keputusan yang sulit."
      }
    case "ENTJ" : 
      return {
        title : "Commander",
        kepribadian, 
        tentang : "orang yang cenderung ekstravert, berfikir secara konseptual dan abstrak, dan memiliki kemampuan pemecahan masalah yang tajam. Anda cenderung terampil dalam mengelola proyek-proyek yang terstruktur dengan baik dan memiliki kemampuan untuk mempengaruhi orang lain dengan mudah. Anda juga sering memiliki visi yang jelas tentang bagaimana dunia seharusnya berjalan dan senang mengambil inisiatif dalam mencapai tujuan-tujuan Anda. Namun, Anda mungkin kurang memperhatikan perasaan atau kebutuhan orang lain dan mungkin kurang terampil dalam mengelola hubungan interpersonal."
      }
    case "ESTP" : 
      return {
        title : "Dynamo",
        kepribadian,
        tentang : "orang yang cenderung ekstravert, mengutamakan fakta-fakta yang terperinci dan nyata, dan senang mengeksplorasi dunia di sekitar Anda dengan cara yang tidak terbatas oleh aturan atau konvensi. Anda cenderung terampil dalam mengelola proyek-proyek yang terstruktur dengan baik dan memiliki kemampuan untuk mengambil inisiatif dan mengambil keputusan dengan cepat. Namun, Anda mungkin kurang tertarik pada ide-ide abstrak atau konsep-konsep yang tidak terkait dengan dunia nyata dan mungkin kurang terampil dalam mengelola hubungan interpersonal."
      }
    case "ESFP" : 
      return {
        title : "Performer",
        kepribadian,
        tentang : "orang yang cenderung ekstravert, mengutamakan emosi dan koneksi interpersonal, dan senang mengeksplorasi dunia di sekitar Anda dengan cara yang tidak terbatas oleh aturan atau konvensi. Anda cenderung terampil dalam mengelola hubungan interpersonal dan memiliki kemampuan untuk menghibur orang lain dengan mudah. Namun, Anda mungkin kurang tertarik pada ide-ide abstrak atau konsep-konsep yang tidak terkait dengan dunia nyata dan mungkin kurang terampil dalam mengelola proyek-proyek yang terstruktur dengan baik."
      }
    case "ENFP" : 
      return {
        title : "Champion",
        kepribadian, 
        tentang : "orang yang cenderung ekstravert, mengutamakan emosi dan koneksi interpersonal, dan senang mengeksplorasi ide-ide baru dan konsep-konsep yang tidak terbatas oleh konvensi-konvensi yang ada. Anda cenderung memiliki kemampuan komunikasi yang kuat dan dapat dengan mudah memahami perspektif orang lain. Anda juga tertarik pada ide-ide abstrak dan konsep-konsep yang lebih luas, dan sering memiliki visi yang jelas tentang bagaimana dunia seharusnya berjalan. Namun, Anda mungkin kurang terampil dalam mengelola proyek-proyek yang terstruktur dengan baik dan mungkin mengalami kesulitan dalam mengambil keputusan yang sulit."
      }
    case "ENTP" : 
      return {
        title : "Inventor",
        kepribadian,
        tentang : "orang yang cenderung ekstravert, berfikir secara konseptual dan abstrak, dan senang mengeksplorasi ide-ide baru dan konsep-konsep yang tidak terbatas oleh konvensi-konvensi yang ada. Anda cenderung memiliki kemampuan analitis yang tajam dan suka mengeksplorasi masalah-masalah yang kompleks. Anda juga cenderung terampil dalam mengelola proyek-proyek yang terstruktur dengan baik dan memiliki kemampuan untuk mempengaruhi orang lain dengan mudah. Namun, Anda mungkin kurang tertarik pada aspek-aspek praktis dari kehidupan sehari-hari dan mungkin kurang terampil dalam mengelola hubungan interpersonal."
      }
  }
  return {
    title :"",
    kepribadian : "",
    tentang : ""
  }
}
