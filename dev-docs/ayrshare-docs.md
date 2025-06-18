# Ayrshare API Documentation

## Overview

Ayrshare is a powerful social media API that allows you to post to multiple social media platforms with a single API call. It supports Instagram, Facebook, Twitter, LinkedIn, TikTok, YouTube, and more.

## Features

- **Multi-Platform Posting**: Post to 10+ social media platforms
- **Scheduled Posts**: Schedule posts for future publishing
- **Analytics**: Get detailed analytics and insights
- **Media Support**: Images, videos, and carousels
- **Auto-Hashtags**: Automatic hashtag suggestions
- **Link Shortening**: Built-in URL shortening
- **Team Management**: Multi-user account management

## Supported Platforms

- Instagram (Feed & Stories)
- Facebook (Pages & Groups)
- Twitter/X
- LinkedIn (Personal & Company)
- TikTok
- YouTube (Community Posts)
- Pinterest
- Reddit
- Telegram
- WhatsApp Business

## Authentication

All API requests require an API key in the header:

```javascript
const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'
}
```

## Base URL

```
https://app.ayrshare.com/api
```

## Core Endpoints

### POST /post
Post to social media platforms

```javascript
const postData = {
  post: "Your post content here",
  platforms: ["twitter", "facebook", "linkedin"],
  mediaUrls: ["https://example.com/image.jpg"],
  scheduleDate: "2024-01-15T10:00:00Z"
}

const response = await fetch('https://app.ayrshare.com/api/post', {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(postData)
})
```

### GET /analytics
Get analytics for your posts

```javascript
const response = await fetch('https://app.ayrshare.com/api/analytics', {
  headers: headers
})
```

### GET /history
Get posting history

```javascript
const response = await fetch('https://app.ayrshare.com/api/history', {
  headers: headers
})
```

### DELETE /delete
Delete a scheduled post

```javascript
const response = await fetch(`https://app.ayrshare.com/api/delete/${postId}`, {
  method: 'DELETE',
  headers: headers
})
```

## Post Parameters

### Required
- `post`: The text content of your post
- `platforms`: Array of platform names

### Optional
- `mediaUrls`: Array of image/video URLs
- `scheduleDate`: ISO 8601 date string for scheduling
- `shortenLinks`: Boolean to enable link shortening
- `hashtags`: Array of hashtags to add
- `youTubeOptions`: YouTube-specific options
- `instagramOptions`: Instagram-specific options

## Platform-Specific Options

### Instagram
```javascript
{
  instagramOptions: {
    story: true, // Post to story instead of feed
    reels: true  // Post as reel
  }
}
```

### LinkedIn
```javascript
{
  linkedInOptions: {
    company: "company-id" // Post to company page
  }
}
```

### YouTube
```javascript
{
  youTubeOptions: {
    title: "Video Title",
    description: "Video Description",
    tags: ["tag1", "tag2"]
  }
}
```

## Response Format

### Success Response
```javascript
{
  status: "success",
  id: "post-id-12345",
  postIds: {
    twitter: "twitter-post-id",
    facebook: "facebook-post-id",
    linkedin: "linkedin-post-id"
  },
  errors: []
}
```

### Error Response
```javascript
{
  status: "error",
  errors: [
    {
      platform: "twitter",
      message: "Character limit exceeded"
    }
  ]
}
```

## Rate Limits

- **Free Plan**: 10 posts per month
- **Starter Plan**: 100 posts per month
- **Growth Plan**: 500 posts per month
- **Business Plan**: 2000 posts per month

## Best Practices

1. **Image Optimization**: Optimize images for each platform
2. **Character Limits**: Respect platform character limits
3. **Hashtag Strategy**: Use platform-appropriate hashtags
4. **Scheduling**: Schedule posts for optimal engagement times
5. **Analytics**: Monitor performance and adjust strategy

## Error Handling

Always handle errors gracefully:

```javascript
try {
  const response = await fetch('https://app.ayrshare.com/api/post', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(postData)
  })
  
  const result = await response.json()
  
  if (result.status === 'error') {
    console.error('Posting errors:', result.errors)
  } else {
    console.log('Posted successfully:', result.postIds)
  }
} catch (error) {
  console.error('API request failed:', error)
}
```

## SDK Support

Ayrshare provides official SDKs for:
- Node.js
- Python
- PHP
- Ruby
- Go

## Webhooks

Set up webhooks to receive notifications about post status:

```javascript
{
  webhookUrl: "https://yourapp.com/webhook",
  events: ["post.published", "post.failed"]
}
```

This documentation covers the essential features needed to integrate Ayrshare's social media posting capabilities into your application. 