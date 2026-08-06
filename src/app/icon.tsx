import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f4efe4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: 13,
            height: 13,
            borderRadius: "50%",
            background: "#c8460e",
            position: "absolute",
            top: 6,
          }}
        />
        <div
          style={{
            width: 36,
            height: 15,
            borderRadius: "50% 50% 0 0",
            background: "#d1a13f",
            position: "absolute",
            bottom: 0,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
