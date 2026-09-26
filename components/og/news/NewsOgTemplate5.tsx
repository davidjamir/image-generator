import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate5({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "TECH EXPLAINER",
    timeAgo = "SAN FRANCISCO // SILICON VALLEY",
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
                backgroundColor: "#020617",
                fontFamily: "'Plus Jakarta Sans', -apple-system, sans-serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full-Bleed Atmospheric Background Photo */}
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

            {/* Atmospheric Vignette Overlay */}
            <div
                style={{
                    display: "flex",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "1350px",
                    background:
                        "linear-gradient(180deg, rgba(2,6,23,0.75) 0%, rgba(2,6,23,0.15) 30%, rgba(2,6,23,0.65) 65%, rgba(2,6,23,0.98) 100%)",
                }}
            />

            {/* 2. Top Brand Header Bar */}
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
                {/* Logo */}
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
                                fontWeight: 900,
                                color: accentColor,
                                letterSpacing: "3px",
                                textShadow: "0 2px 10px rgba(0,0,0,0.9)",
                            }}
                        >
                            {sourceDomain}
                        </div>
                    )}
                </div>

                {/* Top Right Channel Tag */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        padding: "8px 22px",
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                        border: `1.5px solid ${accentColor}80`,
                        borderRadius: "6px",
                        color: accentColor,
                        fontSize: "13px",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                    }}
                >
                    {statusLabel}
                </div>
            </div>

            {/* 3. Unified News Deck: Attached Header Ribbon + Glass Card Body */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "100px",
                    left: "56px",
                    width: "968px",
                    boxShadow:
                        "0 30px 60px -10px rgba(0, 0, 0, 0.85), inset 0 1px 2px rgba(255, 255, 255, 0.2)",
                    borderRadius: "16px",
                    overflow: "hidden",
                }}
            >
                {/* Attached Header Banner Bar */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: primaryColor,
                        padding: "16px 28px",
                        color: "#FFFFFF",
                        fontSize: "14px",
                        fontWeight: 700,
                        fontFamily: "'JetBrains Mono', monospace",
                        letterSpacing: "2.5px",
                        textTransform: "uppercase",
                    }}
                >
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "10px"
                    }
                    }>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 100 100"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M50 5 L61 36 L94 36 L67 55 L78 88 L50 68 L22 88 L33 55 L6 36 L39 36 Z"
                                fill={accentColor}
                            />
                        </svg>
                        <span>{badgeTag}</span>
                    </div>
                    <span>{statusLabel}</span>
                </div>

                {/* Attached Translucent Glass Card Body */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        padding: "40px 48px 36px 48px",
                        backgroundColor: "rgba(15, 23, 42, 0.9)",
                        border: "1.5px solid rgba(255, 255, 255, 0.3)",
                        borderTop: "none",
                        borderRadius: "0 0 16px 16px",
                        boxSizing: "border-box",
                    }}
                >
                    {/* Headline */}
                    <div
                        style={{
                            display: "flex",
                            fontSize: "42px",
                            lineHeight: 1.18,
                            fontWeight: 800,
                            color: "#FFFFFF",
                            letterSpacing: "-0.5px",
                            fontStyle: titleItalic ? "italic" : "normal",
                            textShadow: "0 2px 16px rgba(0,0,0,0.95)",
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
                                color: "#F1F5F9",
                                fontWeight: 500,
                                textShadow: "0 2px 12px rgba(0,0,0,0.9)",
                            }}
                        >
                            {snippet}
                        </div>
                    )}

                    {/* Card Internal Footer Divider */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            paddingTop: "16px",
                            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
                            fontSize: "13px",
                            fontFamily: "'JetBrains Mono', monospace",
                            color: "#CBD5E1",
                        }}
                    >
                        <span style={{ color: "#FFFFFF", fontWeight: 700 }}>{timeAgo}</span>
                        <span style={{ color: primaryColor, fontWeight: 800, letterSpacing: "1px" }}>
                            TRANSMISSION SECURE
                        </span>
                    </div>
                </div>
            </div>

            {/* 4. Bottom Outer Footer Bar */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    position: "absolute",
                    bottom: "40px",
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
                <span style={{ color: "#E2E8F0", fontWeight: 700 }}>LIVE BROADCAST WIRE</span>
                <span style={{ color: primaryColor, fontWeight: 800, letterSpacing: "1px" }}>{sourceDomain}</span>
            </div>
        </div>
    );
}

