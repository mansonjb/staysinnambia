import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
            width: 74,
            height: 74,
            borderRadius: "50%",
            background: "#c8460e",
            position: "absolute",
            top: 32,
          }}
        />
        <div
          style={{
            width: 204,
            height: 84,
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
