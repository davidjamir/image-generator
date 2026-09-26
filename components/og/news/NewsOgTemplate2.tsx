import { OgTemplate } from "@/types/og-template";

export function NewsOgTemplate2({
    title,
    snippet,
    imageUrl,
    logoUrl,
    titleItalic = false,
    primaryColor = "#DC2626",
    accentColor = "#FFFFFF",
    badgeTag = "BREAKING NEWS",
    sourceDomain = "THE TIME NEWS",
    statusLabel = "SPECIAL DISPATCH",
    timeAgo = "WASHINGTON • VOL. CLXXIV NO. 60,192",
}: OgTemplate) {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "1080px",
                height: "1350px",
                backgroundColor: "#F7F5F0",
                position: "relative",
                overflow: "hidden",
                fontFamily: "'Playfair Display', Georgia, serif",
                boxSizing: "border-box",
            }}
        >
            {/* 1. Full-Width Top Photo (Absolute Positioning 680px Height) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "1080px",
                    height: "680px",
                    backgroundColor: "#18181B",
                    overflow: "hidden",
                    borderBottom: "1px solid #D4D4D8",
                }}
            >
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt=""
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "1080px",
                            height: "680px",
                            objectFit: "cover",
                        }}
                    />
                )}

                {/* Top Vignette for Masthead */}
                <div
                    style={{
                        display: "flex",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "1080px",
                        height: "180px",
                        background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%)",
                    }}
                />

                {/* Seamless Header on Photo (Absolute Positioning) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        top: "44px",
                        left: "54px",
                        width: "972px",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    {/* Logo with explicit pixel dimensions for Satori */}
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

                    {/* Status Label Tag in Top Right of Photo Header */}
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "8px",
                            padding: "8px 22px",
                            backgroundColor: "rgba(0, 0, 0, 0.75)",
                            border: `1.5px solid ${accentColor}80`,
                            borderRadius: "4px",
                            color: accentColor,
                            fontSize: "13px",
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 700,
                            letterSpacing: "2.5px",
                            textTransform: "uppercase",
                            boxShadow: "0 4px 16px rgba(0,0,0,0.6)",
                        }}
                    >
                        <span>{statusLabel}</span>
                    </div>
                </div>
            </div>

            {/* 2. Clean Editorial Broadsheet Story Container (Absolute Positioning below photo) */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "680px",
                    left: 0,
                    width: "1080px",
                    height: "670px",
                    padding: "52px 64px 44px 64px",
                    backgroundColor: "#F7F5F0",
                    boxSizing: "border-box",
                }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
                    {/* Breaking News Tag at Top of Text Card */}
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "8px",
                                padding: "8px 22px",
                                backgroundColor: primaryColor,
                                color: "#FFFFFF",
                                fontSize: "14px",
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 800,
                                letterSpacing: "2.5px",
                                textTransform: "uppercase",
                                boxShadow: `0 4px 14px ${primaryColor}66`,
                            }}
                        >
                            <span>{badgeTag}</span>
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            fontSize: "46px",
                            lineHeight: 1.15,
                            fontWeight: 800,
                            color: "#111827",
                            letterSpacing: "-0.5px",
                            fontStyle: titleItalic ? "italic" : "normal",
                        }}
                    >
                        {title}
                    </div>

                    {snippet && (
                        <div
                            style={{
                                display: "flex",
                                fontSize: "22px",
                                lineHeight: 1.5,
                                color: "#3F3F46",
                                fontFamily: "'Newsreader', Georgia, serif",
                                maxWidth: "960px",
                            }}
                        >
                            {snippet}
                        </div>
                    )}
                </div>

                {/* Clean Editorial Footer (Absolute at bottom of canvas) */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: "44px",
                        left: "64px",
                        width: "952px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingTop: "20px",
                        borderTop: "1px solid #D4D4D8",
                        fontSize: "14px",
                        color: "#71717A",
                        fontFamily: "'Newsreader', Georgia, serif",
                    }}
                >
                    <span style={{ fontWeight: 700, color: "#18181B" }}>{timeAgo}</span>
                    <span style={{ color: primaryColor, fontWeight: 800, letterSpacing: "1px" }}>{sourceDomain}</span>
                </div>
            </div>
        </div>
    );
}
