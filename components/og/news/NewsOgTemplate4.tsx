import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate4({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    author = "EDWARD S. RYAN",
    authorRole = "CHIEF FOREIGN CORRESPONDENT",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "SPECIAL DISPATCH",
    timeAgo = "12 MINS AGO",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                position: "relative",
                overflow: "hidden",
                backgroundColor: "#030712",
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full-Bleed Atmospheric Photo */}
            {imageUrl && (
                <img
                    src={imageUrl}
                    alt=""
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "1350px",
                        objectFit: "cover",
                    }}
                />
            )}

            {/* Atmospheric Dark Overlay Gradient */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(3,7,18,0.7) 0%, rgba(3,7,18,0.15) 30%, rgba(3,7,18,0.65) 65%, rgba(3,7,18,0.98) 100%)",
                }}
            />

            {/* 2. Top Header (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    top: "54px",
                    left: "56px",
                    width: "968px",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                {/* Left: Brand Logo */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", height: "50px" }}>
                    {logoUrl ? (
                        <img
                            src={logoUrl}
                            alt="Logo"
                            style={{
                                width: "220px",
                                height: "50px",
                                objectFit: "contain",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "26px",
                                fontWeight: 800,
                                color: accentColor,
                                letterSpacing: "3px",
                                textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                            }}
                        >
                            {sourceDomain}
                        </div>
                    )}
                </div>

                {/* Right: Author / Role Badge */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                    }}
                >
                    <span style={{ fontSize: "15px", fontWeight: 800, color: accentColor, letterSpacing: "1px" }}>
                        {author || "EDWARD S. RYAN"}
                    </span>
                    <span
                        style={{
                            fontSize: "12px",
                            fontFamily: "'JetBrains Mono', monospace",
                            color: primaryColor,
                            fontWeight: 700,
                            letterSpacing: "1.5px",
                        }}
                    >
                        {authorRole}
                    </span>
                </div>
            </div>

            {/* 3. Main Floating News Monolith Deck Card (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "105px",
                    left: "56px",
                    width: "968px",
                    backgroundColor: "#090D16",
                    borderRadius: "16px",
                    border: `2px solid ${primaryColor}`,
                    padding: "46px 50px 40px 50px",
                    boxShadow: `0 30px 60px rgba(0,0,0,0.9), 0 0 24px ${primaryColor}50`,
                    gap: "20px",
                    boxSizing: "border-box",
                }}
            >
                {/* Top Card Row: BADGE TAG (Left) + STATUS LABEL (Right) */}
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 22px",
                            backgroundColor: primaryColor,
                            borderRadius: "4px",
                            color: "#FFFFFF",
                            fontSize: "13px",
                            fontWeight: 700,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            boxShadow: `0 0 18px ${primaryColor}80`,
                        }}
                    >
                        <span>{badgeTag || "BREAKING NEWS"}</span>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "13px",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 700,
                            color: accentColor,
                            backgroundColor: "rgba(255, 255, 255, 0.08)",
                            border: `1px solid ${accentColor}40`,
                            padding: "6px 18px",
                            borderRadius: "4px",
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                        }}
                    >
                        {statusLabel}
                    </div>
                </div>

                {/* Title Headline */}
                <div
                    style={{
                        display: "flex",
                        fontSize: "44px",
                        lineHeight: 1.15,
                        fontWeight: 800,
                        color: "#FFFFFF",
                        letterSpacing: "-0.5px",
                        fontStyle: titleItalic ? "italic" : "normal",
                    }}
                >
                    {title}
                </div>

                {/* Snippet Lead */}
                {snippet && (
                    <div
                        style={{
                            display: "flex",
                            fontSize: "20px",
                            lineHeight: 1.5,
                            color: "#CBD5E1",
                            fontWeight: 500,
                        }}
                    >
                        {snippet}
                    </div>
                )}
            </div>

            {/* 4. Bottom Footer (Absolute Positioning) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: "44px",
                    left: "56px",
                    width: "968px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    fontSize: "13px",
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "#94A3B8",
                    textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                }}
            >
                <span style={{ color: "#E2E8F0", fontWeight: 700 }}>{timeAgo}</span>
                <span style={{ color: primaryColor, fontWeight: 800, letterSpacing: "1px" }}>{sourceDomain}</span>
            </div>
        </div>
    );
}
