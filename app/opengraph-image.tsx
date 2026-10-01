import { ImageResponse } from "next/og";

export const alt = "Kamila Meshaj — Content Creator & Social Media Manager";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f7f3ea",
          color: "#183427",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "70px 84px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            borderBottom: "1px solid rgba(24, 52, 39, 0.28)",
            display: "flex",
            fontFamily: "Arial, sans-serif",
            fontSize: 24,
            fontWeight: 700,
            justifyContent: "space-between",
            letterSpacing: "0.28em",
            paddingBottom: 24,
            textTransform: "uppercase",
          }}
        >
          <span>Kamila Meshaj</span>
          <span>Portfolio 2026</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Georgia, serif",
              fontSize: 132,
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: 0.9,
            }}
          >
            <span>Kamila</span>
            <span>Meshaj</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: "Arial, sans-serif",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.22em",
              lineHeight: 1.45,
              textTransform: "uppercase",
            }}
          >
            <span>Content Creator</span>
            <span>&amp; Social Media Manager</span>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
