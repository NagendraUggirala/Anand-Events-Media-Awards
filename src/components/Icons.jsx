import React from 'react';

// Icon component that maps icon names to SVG icons
export const Icon = ({ name, className = "w-6 h-6", ...props }) => {
  const icons = {
    // Film & Entertainment
    film: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v8H8V8zm2 2v4h4v-4h-4z"/>
      </svg>
    ),
    music: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
      </svg>
    ),
    theater: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12z"/>
        <path d="M6 10h2v2H6zm4 0h2v2h-2zm4 0h2v2h-2z"/>
      </svg>
    ),
    celebration: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    circus: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/>
      </svg>
    ),
    
    // Business & Professional
    briefcase: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
      </svg>
    ),
    chart: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    ),
    newspaper: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/>
      </svg>
    ),
    
    // Awards & Recognition
    trophy: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
      </svg>
    ),
    star: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    target: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
    
    // Healthcare
    medical: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2v14H3v3c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3V2l-1.5 1.5zM19 19c0 .55-.45 1-1 1s-1-.45-1-1v-3H8V5h11v14z"/>
        <path d="M9 7h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2zm-7 3h6v2H9zm7 0h2v2h-2z"/>
      </svg>
    ),
    
    // General
    rocket: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M2.81 14.12L5.64 11.3l-2.1-.63a1 1 0 0 1-.13-1.91l8.05-2.43a1 1 0 0 1 1.91.13l.63 2.1 2.82-2.83a1 1 0 0 1 1.42 0l4.24 4.24a1 1 0 0 1 0 1.42l-2.83 2.82 2.1.63a1 1 0 0 1 .13 1.91l-8.05 2.43a1 1 0 0 1-1.91-.13l-.63-2.1-2.83-2.82a1 1 0 0 1 0-1.42zm3.54 3.54l2.12-2.12 1.41 1.41-2.12 2.12-1.41-1.41zm8.49-8.49l2.12-2.12 1.41 1.41-2.12 2.12-1.41-1.41z"/>
      </svg>
    ),
    lightbulb: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7z"/>
      </svg>
    ),
    globe: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    handshake: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.5 2.02l-1.5 1.5c-.32.32-.09.86.35.86H20v11.5c0 .83-.67 1.5-1.5 1.5S17 16.33 17 15.5V11h-1c-.55 0-1-.45-1-1V7.5c0-.83.67-1.5 1.5-1.5h3.15c.44 0 .67-.54.35-.86L18.48 2.02c-.19-.19-.49-.19-.68 0zM15.5 4.52L14.5 5.5c-.32.32-.09.86.35.86H15v8.5c0 .83-.67 1.5-1.5 1.5S12 15.33 12 14.5V11h-1c-.55 0-1-.45-1-1V7.5c0-.83.67-1.5 1.5-1.5h3.15c.44 0 .67-.54.35-.86L12.48 4.02c-.19-.19-.49-.19-.68 0zM9.5 6.52L8.5 7.5c-.32.32-.09.86.35.86H9v5.5c0 .83-.67 1.5-1.5 1.5S6 14.33 6 13.5V11H5c-.55 0-1-.45-1-1V7.5C4 6.67 4.67 6 5.5 6h3.15c.44 0 .67-.54.35-.86L8.48 4.02c-.19-.19-.49-.19-.68 0z"/>
      </svg>
    ),
    shield: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
      </svg>
    ),
    document: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
      </svg>
    ),
    sparkles: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    firework: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M5.64 3.64L4.22 2.22 2.81 3.64l1.41 1.41zm16.36 0l-1.41-1.41-1.41 1.41 1.41 1.41zM12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm16 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM12 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    art: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        <path d="M8 12l2 2 4-4"/>
      </svg>
    ),
    clipboard: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 16H5V5h2v3h10V5h2v14z"/>
      </svg>
    ),
    world: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    ),
    book: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
      </svg>
    ),
    strength: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 3 2.71 4.43l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29l-1.43-1.43z"/>
      </svg>
    ),
    airplane: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
      </svg>
    ),
    building: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 7V3H2v18h20V7H12zm-2 12H4v-2h6v2zm0-4H4v-2h6v2zm0-4H4V9h6v2zm0-4H4V5h6v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
      </svg>
    ),
    shopping: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
      </svg>
    ),
    graduation: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
      </svg>
    ),
    construction: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
    warning: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
    ),
    meditation: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
      </svg>
    ),
  };

  const iconName = name?.toLowerCase() || '';
  const IconComponent = icons[iconName];

  if (!IconComponent) {
    // Fallback to a default icon if name not found
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
    );
  }

  return IconComponent;
};

// Helper function to get icon name from emoji
export const getIconName = (emoji) => {
  const emojiMap = {
    '🎬': 'film',
    '🎵': 'music',
    '🎭': 'theater',
    '🎉': 'celebration',
    '🎪': 'circus',
    '💼': 'briefcase',
    '📈': 'chart',
    '📰': 'newspaper',
    '🏆': 'trophy',
    '⭐': 'star',
    '🎯': 'target',
    '⚕️': 'medical',
    '🚀': 'rocket',
    '💡': 'lightbulb',
    '🌍': 'globe',
    '🤝': 'handshake',
    '🛡️': 'shield',
    '📜': 'document',
    '✨': 'sparkles',
    '🎆': 'firework',
    '🎨': 'art',
    '📋': 'clipboard',
    '🌐': 'world',
    '📖': 'book',
    '💪': 'strength',
    '✈️': 'airplane',
    '🏛️': 'building',
    '🛍️': 'shopping',
    '🎓': 'graduation',
    '🏗️': 'construction',
    '⚠️': 'warning',
    '🧘': 'meditation',
  };
  return emojiMap[emoji] || 'star';
};

