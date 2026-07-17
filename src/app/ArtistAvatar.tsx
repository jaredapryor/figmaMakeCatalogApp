import { useEffect, useState } from "react";
import { PHOTO_BY_FILE } from "./assetMaps";

export type PhotoSource = "local" | "remote";

export function artistInitials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) {
    const word = parts[0];
    return word.slice(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[1][0]).toUpperCase();
}

/** Resolve stored photo to a display URL. Empty string means show initials. */
export function resolveArtistPhoto(
  photo: string,
  photoSource?: PhotoSource
): string {
  if (!photo) return "";
  if (photoSource === "remote") return photo;
  if (photoSource === "local") return PHOTO_BY_FILE[photo] ?? "";
  if (PHOTO_BY_FILE[photo]) return PHOTO_BY_FILE[photo];
  return photo;
}

interface ArtistAvatarProps {
  name: string;
  photo: string;
  photoSource?: PhotoSource;
  className?: string;
  sizeClass?: string;
  isDark?: boolean;
  textClassName?: string;
}

export function ArtistAvatar({
  name,
  photo,
  photoSource,
  className = "",
  sizeClass = "size-[56px]",
  isDark = true,
  textClassName,
}: ArtistAvatarProps) {
  const src = resolveArtistPhoto(photo, photoSource);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  const showImage = Boolean(src) && !failed;
  const bg = isDark ? "#1a1a26" : "#f0ebe2";
  const initialsColor = isDark ? "text-[#a855f7]" : "text-[#9333ea]";
  const fontSize =
    sizeClass.includes("168") || sizeClass.includes("[168")
      ? "text-[42px]"
      : sizeClass.includes("40") || sizeClass.includes("[40")
        ? "text-[12px]"
        : "text-[16px]";

  return (
    <div
      className={`rounded-full shrink-0 overflow-hidden flex items-center justify-center ${sizeClass} ${className}`}
      style={{ background: bg }}
      aria-label={name}
    >
      {showImage ? (
        <img
          src={src}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setFailed(true)}
        />
      ) : (
        <span
          className={`font-semibold select-none ${fontSize} ${textClassName ?? initialsColor}`}
        >
          {artistInitials(name)}
        </span>
      )}
    </div>
  );
}
