# Embedding Images, Videos, and Audio in HTML

This document explains how to use HTML to embed images, videos, and audio files. The examples include all commonly used attributes, alternative methods, and best practices.

---

## 1. Images

The `<img>` tag embeds images into a webpage. It is an inline element and self-closing.

### Example Code

```html
<img 
    src="https://wallpapers.com/images/hd/chibi-balloon-spiderman-bly29pc4e39npic5.webp" 
    alt="Chibi Spiderman" 
    height="800px" 
    width="800px" 
    title="Chibi Spiderman Image">
```

### Attributes

- **`src`**: The source URL or file path of the image.
- **`alt`**: Provides alternate text for accessibility or when the image fails to load.
- **`height` & `width`**: Define the image's dimensions (in pixels or percentage).
- **`title`**: Displays a tooltip on hover.

### Alternate Method

Using CSS for responsive images:

```html
<style>
    .responsive-img {
        max-width: 100%;
        height: auto;
    }
</style>
<img 
    class="responsive-img" 
    src="https://wallpapers.com/images/hd/chibi-balloon-spiderman-bly29pc4e39npic5.webp" 
    alt="Responsive Image">
```

### Best Practices

- Always include the `alt` attribute for screen readers and SEO.
- Use modern formats like WebP for faster loading.

---

## 2. Videos

The `<video>` tag is used to embed video content. It allows user interaction with controls and requires a closing tag.

### Example

```html
<video 
    src="https://videos.pexels.com/video-files/30290425/12984919_1920_1080_25fps.mp4" 
    height="300px" 
    width="500px" 
    controls 
    autoplay 
    muted>
    Your browser does not support the <code>video</code> tag.
</video>
```

### Attributes-

- **`src`**: The source URL of the video.
- **`height` & `width`**: Specify the dimensions of the video.
- **`controls`**: Adds playback controls like play/pause and volume.
- **`autoplay`**: Plays the video as soon as it's loaded.
- **`muted`**: Mutes the audio by default.
- **`loop`**: Repeats the video after it ends.

### Alternate Method -

Including multiple formats for compatibility:

```html
<video height="300px" width="500px" controls autoplay muted>
    <source src="https://videos.pexels.com/video-files/19026925/19026925-uhd_2560_1440_25fps.mp4" type="video/mp4">
    <source src="https://videos.pexels.com/video-files/28728787/12464789_360_640_30fps.mp4" type="video/webm">
    Your browser does not support the <code>video</code> tag.
</video>
```

---

## 3. Audio

The `<audio>` tag is used to embed audio files in a web page.

### Example Code -

```html
<audio 
    src="/resources/audio/406921__kyles__speaker-voice-prerecorded-ad-loop-for-music-player.mp3" 
    controls 
    autoplay 
    loop 
    muted>
    Your browser does not support the <code>audio</code> tag.
</audio>
```

### Attributes -

- **`src`**: Specifies the source of the audio file.
- **`controls`**: Adds controls for play/pause, volume, etc.
- **`autoplay`**: Plays the audio as soon as it loads.
- **`loop`**: Repeats the audio.
- **`muted`**: Mutes the audio by default.

### Alternate Method ->

Using multiple formats:

```html
<audio controls autoplay loop muted>
    <source src="/resources/audio/audio.mp3" type="audio/mpeg">
    <source src="/resources/audio/audio.ogg" type="audio/ogg">
    Your browser does not support the <code>audio</code> tag.
</audio>
```

---

## 4. Advanced Multimedia Elements

### `<picture>`: Responsive Images

The `<picture>` tag allows specifying multiple image sources for different device sizes.

Example:

```html
<picture>
    <source srcset="image-large.webp" media="(min-width: 1024px)">
    <source srcset="image-small.webp" media="(max-width: 768px)">
    <img src="image-default.jpg" alt="Responsive Example">
</picture>
```

### `<source>`: Multiple Media Formats

Used within `<video>` or `<audio>` tags to specify alternative formats.

### `<track>`: Subtitles and Captions

Adds subtitles or captions to a video.

Example:

```html
<video controls>
    <source src="video.mp4" type="video/mp4">
    <track src="subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
</video>
```

---
