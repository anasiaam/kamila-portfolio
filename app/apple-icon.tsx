import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#183427",
          color: "#f7f3ea",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 62,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "0.08em",
          width: "100%",
        }}
      >
        KM
      </div>
    ),
    size,
  );
}
