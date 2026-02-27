"use client";
import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";

// Brand colors + display names
const brandData = {
  javascript: { color: "#F7DF1E", name: "JavaScript" },
  typescript: { color: "#3178C6", name: "TypeScript" },
  react: { color: "#61DAFB", name: "React" },
  nodejs: { color: "#5FA04E", name: "Node.js" },
  html5: { color: "#E34F26", name: "HTML5" },
  css3: { color: "#1572B6", name: "CSS3" },
  git: { color: "#F05032", name: "Git" },
  github: { color: "#ffffff", name: "GitHub" },
  figma: { color: "#F24E1E", name: "Figma" },
  bootstrap: { color: "#7952B3", name: "Bootstrap" },
  tailwindcss: { color: "#06B6D4", name: "Tailwind CSS" },
  mongodb: { color: "#47A248", name: "MongoDB" },
  firebase: { color: "#DD2C00", name: "Firebase" },
  express: { color: "#ffffff", name: "Express" },
  vite: { color: "#646CFF", name: "Vite" },
  vercel: { color: "#ffffff", name: "Vercel" },
  linux: { color: "#FCC624", name: "Linux" },
  java: { color: "#E11F21", name: "Java" },
  python: { color: "#3776AB", name: "Python" },
  nextdotjs: { color: "#ffffff", name: "Next.js" },
  postgresql: { color: "#4169E1", name: "PostgreSQL" },
  prisma: { color: "#2D3748", name: "Prisma" },
};

export const cloudProps = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

export const renderCustomIcon = (icon) => {
  const data = brandData[icon.slug];
  const color = data?.color || "#ffffff";
  const name = data?.name || icon.title || icon.slug;

  return renderSimpleIcon({
    icon: {
      ...icon,
      hex: color.replace("#", ""),
      title: name,
    },
    bgHex: "#1c1c1c",
    fallbackHex: color,
    minContrastRatio: 0,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      title: name,
      onClick: (e) => e.preventDefault(),
    },
    imgProps: {
      alt: name,
    },
  });
};

export default function IconCloud({ iconSlugs = [], imageArray }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (iconSlugs.length > 0) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderCustomIcon(icon)
    );
  }, [data]);

  return (
    <Cloud {...cloudProps}>
      <>
        <>{renderedIcons}</>
        {imageArray &&
          imageArray.length > 0 &&
          imageArray.map((image, index) => (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              <img height="42" width="42" alt="icon" src={image} />
            </a>
          ))}
      </>
    </Cloud>
  );
}
