export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'cc'
export const headline = 'A ordinary human.'
export const introduction =
  "So long as men can breathe or eyes can see, So long lives this, and this gives life to thee."
export const email = 'tong.hu@scls-sh.org'
export const githubUsername = 'derekhut'

// about page
export const aboutMeHeadline = 'Shall I compare thee to a summer\'s day?'
export const aboutParagraphs = [
  "Thou art more lovely and more temperate: Rough winds do shake the darling buds of May, And summer\'s lease hath all too short a date; ",
  'Sometime too hot the eye of heaven shines, And often is his gold complexion dimmed, And every fair from fair sometime declines, By chance, or nature\'s changing course untrimmed:',
  "But thy eternal summer shall not fade, Nor lose possession of that fair thou ow\'st, Nor shall death brag thou wander'st in his shade, When in eternal lines to time thou grow\'st,",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something about AI, programming and life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
    href: 'https://www.tiktok.com/@harvard?lang=en',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
    href: 'https://space.bilibili.com/349721082',
  },
]

// https://simpleicons.org/
export const techIcons = [
  'typescript',
  'javascript',
  'supabase',
  'cloudflare',
  'java',
  'oracle',
  'mysql',
  'react',
  'nodedotjs',
  'nextdotjs',
  'prisma',
  'postgresql',
  'nginx',
  'vercel',
  'docker',
  'git',
  'github',
  'visualstudiocode',
  'androidstudio',
  'ios',
  'apple',
  'wechat',
]
