import LogoImage from "../assets/images/instagram.png";
import { Link } from "react-router-dom";

function Footer(props: any) {
  function footerLinkAction(): void {
    window.open(
      "https://www.linkedin.com/in/gunjan-sharma-a74332251/",
      "_blank"
    );
  }

  function openLink(): void {
    window.open("https://en.wikipedia.org/wiki/Web_colors", "_blank");
  }

  function heading(heading: string, url: string): JSX.Element {
    return (
      <Link to={url}>
        <h5 style={{ fontSize: "13px" }} className="text-white text-centre">
          {heading}
        </h5>
      </Link>
    );
  }

  return (
    <footer className="w-full">
      <div className="h-340px w-full mt-24 flex flex-col items-center justify-between bg-black">
        <div className="w-full m-5 flex items-center justify-center">
          <img alt="" src={LogoImage} className="w-7 h-7" />
          <h1 className="text-center ml-4 text-white text-xl font-bold">
            Instagram Video Downloader+
          </h1>
        </div>

        <div className="w-100%">
          <div className="p-5 container grid grid-cols-3 md:grid-cols-4 gap-2 w-full">
            {heading(
              "Youtube Video Downloader",
              "https://youtubevideo-downloader.netlify.app"
            )}
            {heading(
              "Youtube Audio Downloader",
              "https://youtubeaudio-downloader.netlify.app"
            )}
            {heading(
              "Youtube Shorts Downloader",
              "https://youtubeshorts-downloader.app"
            )}
            {heading(
              "Youtube Thumbnail Downloader",
              "https://youtubethumbnail-downloader.netlify.app"
            )}

            {heading(
              "Facebook Video Downloader",
              "https://facebookvideo-downloader.netlify.app"
            )}
            {heading(
              "Facebook Audio Downloader",
              "https://facebookaudio-downloader.netlify.app"
            )}
            {heading(
              "Facebook Thumbnail Downloader",
              "https://facebookthumbnail-downloader.netlify.app"
            )}

            {heading(
              "Instagram Video Downloader",
              "https://instagramvideo-downloader.netlify.app"
            )}
            {heading(
              "Instagram Audio Downloader",
              "https://instagramaudio-downloader.netlify.app"
            )}
            {heading(
              "Instagram Thumbnail Downloader",
              "https://instagramthumbnail-downloader.netlify.app"
            )}
          </div>
        </div>

        <div className="m-4">
          <h5 className="text-center text-white font-sans text-xs font-bold">
            @Copyright 2024-2030
          </h5>
          <Link to={"https://www.linkedin.com/in/gunjan-sharma-a74332251/"}>
            <h5 className="text-center m-1 text-white font-sans text-xs font-bold">
              Designed & Developed By Gunjan Sharma
            </h5>
          </Link>
          <h5 className="xs:mb-5 text-center text-white font-sans text-xs font-bold">
            Made With ❤ In India
          </h5>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
