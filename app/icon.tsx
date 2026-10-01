import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#183427",
          color: "#f7f3ea",
          display: "flex",
          fontFamily: "Georgia, serif",
          fontSize: 22,
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
