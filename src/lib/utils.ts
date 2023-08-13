import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const dummyArtist = [
  [
    "https://i0.wp.com/vibrancemagazine.com/wp-content/uploads/2022/09/kim-sejeong.jpg?fit=1728%2C1080&ssl=1",
    "https://asianwiki.com/images/5/5e/The_Uncanny_Counter_2-mp1.jpeg",
    "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/02/26/926153676.jpg",
    "https://www.soloposfm.com/assets/dokumen//2022/03/A-Business-Proposal-poster_Pinterest-696x1024.jpg",
    "https://asianwiki.com/images/6/66/School_2017-p2.jpg",
    "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/2022/03/25/3301100643.jpg",
    "https://i.mydramalist.com/66Zr2_4f.jpg",
    "https://asianwiki.com/images/3/39/Kim_Se-Jeong-1996-p1.jpeg",
  ],
  [
    "https://nuzulianiqarlina.files.wordpress.com/2011/12/nnddp.jpg",
    "https://asianwiki.com/images/7/7f/King_the_Land-p1.jpg",
    "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/06/27/4199802936.jpg",
    "https://cdn0-production-images-kly.akamaized.net/Z2f553m0laaghdoKnY6uB4OGkvs=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4087551/original/097123100_1657699112-Big_Mouth_Main_Poster.jpg",
    "https://cdn0-production-images-kly.akamaized.net/9FVpleVAvswotBZaCiW8rxieMA8=/800x1066/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3189437/original/044500300_1595582728-the-k2-poster-ji-chang-wook-yoona.jpg",
    "https://akcdn.detik.net.id/visual/2023/06/26/pemain-drama-korea-king-the-land-5_43.png?w=720&q=90",
    "https://m.media-amazon.com/images/M/MV5BNWE4YmNlMjktM2RhNS00YTA2LWI4OTItNjE5NTgwNjQwZmFhXkEyXkFqcGdeQXVyMTk5Mjk1Mjk@._V1_.jpg",
    "https://image.jpnn.com/resize/570x380-80/arsip/normal/2017/02/10/23ba8fb92b2028e019645cd789b2a4c0.jpg",
  ],
  [
    "https://1.bp.blogspot.com/-nQFm_cZaHD8/XNP20bs2qAI/AAAAAAAAFqA/pAZ-_oyvQEAlGStY6NFiuSL8_2EhEFFrgCLcBGAs/s1600/Suzy%2Bmiss%2Ba.jpg",
    "https://1.bp.blogspot.com/-Eg-wc0FVWDs/X_me6xC_abI/AAAAAAAABrc/xJcdVNF1kBkDNGE3rMO0ExVFw7954KoMgCLcBGAsYHQ/s948/start%2Bup%2B2.jpg",
    "https://assets.ayobandung.com/crop/0x0:0x0/750x500/webp/photo/2023/02/04/3045219367.png",
    "https://cdn1-production-images-kly.akamaized.net/JMb7hrtwoo7cFBGZPOMhfSeJzjQ=/1200x1200/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2977147/original/012292700_1574673853-vagabond.jpg",
    "https://img.inews.co.id/media/600/files/networks/2022/06/14/2ec7d_drama-korea-anna.jpeg",
    "https://asset-a.grid.id/crop/0x0:0x0/945x630/photo/2022/08/08/foto-cover-sinopsis-drakor-anna-20220808041631.jpg",
    "https://i.mydramalist.com/p0oEef.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Bae_Suzy_at_%27Vagabond%27_show_party_in_Seoul_on_May_24%2C_2019.png/800px-Bae_Suzy_at_%27Vagabond%27_show_party_in_Seoul_on_May_24%2C_2019.png",
  ],
]
