export type Language = 'en' | 'ja'

export const translations = {
  en: {
    nav: {
      works: 'Works',
      about: 'About',
      contact: 'Contact',
      privacy: 'Privacy Policy',
    },
    hero: {
      greeting: "Hi, I'm",
      name: 'Lily Nagasawa',
      title: 'Web Developer / Creator',
      description:
        'Building digital experiences that combine functionality and beauty using modern web technologies. From UI design to implementation — delivering simple, intuitive solutions.',
      cta: 'View Works',
      scroll: 'Scroll',
    },
    works: {
      title: 'Selected Works',
      drag: 'Drag to explore',
      visit: 'Visit Site',
      items: [
        {
          title: 'ドットコムマスターBASIC予想問題演習',
          subtitle: 'Practice Questions App',
          description:
            'A web application for practicing the Dot Com Master BASIC certification exam, featuring interactive question sets and progress tracking.',
          url: 'https://dcmb.mstr.site/',
          tag: 'Exam Prep',
          image: '/images/dcmb_images.png',
        },
        {
          title: 'Japanese master',
          subtitle: 'Hiragana & Katakana Worksheet',
          description:
            'An interactive worksheet application for learning Japanese hiragana and katakana, with printable practice sheets and built-in quizzes.',
          url: 'https://japanese.mstr.site/',
          tag: 'Education',
          image: '/images/jmstr_images.png',
        },
        {
          title: 'じっけんマスター',
          subtitle: 'Science Experiments for Kids',
          description:
            'A science experiment platform for children to enjoy at home. Offers 120+ experiments across 8 categories, browsable by mood or subject, with downloadable instruction sheets.',
          url: 'https://expt.mstr.site/index.html',
          tag: 'Education',
          image: '/images/expt_images.png',
        },
      ],
    },
    about: {
      title: 'About',
      name: 'Lily Nagasawa',
      role: 'Web Developer / Creator',
      location: 'Yokohama, Japan',
      links: {
        github: 'GitHub',
        mail: 'Mail',
      },
      section1: {
        label: '01',
        title: 'Web Developer / Creator',
        body: 'I build digital experiences that combine functionality and beauty using modern web technologies. From interface design to full implementation, I aim to deliver simple, intuitive solutions that resonate with users.',
      },
      section2: {
        label: '02',
        title: 'Focus & Technology',
        body: 'I stay current with the latest technology stacks, specializing in fast, responsive development with Next.js and Tailwind CSS. Beyond code quality, I have a deep passion for minimal design that leverages typography and whitespace effectively.',
      },
      section3: {
        label: '03',
        title: 'Selected Works',
        body: 'I publish web applications I have planned and developed myself, along with projects built through my learning journey.',
      },
    },
    privacy: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: April 23, 2026',
      intro:
        'This Privacy Policy describes how mstr.site ("we", "our", or "us") collects, uses, and shares information when you visit our website.',
      sections: [
        {
          title: '1. Information We Collect',
          body: 'We may collect certain information automatically when you visit our site, including your IP address, browser type, operating system, referring URLs, and pages viewed. This information is collected through cookies and similar tracking technologies.',
        },
        {
          title: '2. How We Use Your Information',
          body: 'We use the information we collect to analyze site traffic and usage patterns, improve the content and user experience of our website, and respond to your inquiries when you contact us through our contact form.',
        },
        {
          title: '3. Google AdSense and Advertising',
          body: 'We use Google AdSense to display advertisements on this site. Google uses cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting Google\'s Ad Settings at https://www.google.com/settings/ads.',
        },
        {
          title: '4. Google Analytics',
          body: 'We may use Google Analytics to understand how visitors interact with our website. Google Analytics uses cookies to collect information about your visits and usage. You can opt out by installing the Google Analytics Opt-out Browser Add-on.',
        },
        {
          title: '5. Cookies',
          body: 'We use cookies and similar tracking technologies to track activity on our website. Cookies are small files stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of our site may not function properly without cookies.',
        },
        {
          title: '6. Third-Party Services',
          body: 'Our website may contain links to external sites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies.',
        },
        {
          title: '7. Data Retention',
          body: 'We retain collected information for as long as necessary to provide our services and comply with legal obligations. Contact form submissions are retained only until the inquiry is resolved.',
        },
        {
          title: '8. Your Rights',
          body: 'You have the right to request access to the personal information we hold about you, request correction of inaccurate data, and request deletion of your personal data, subject to legal obligations.',
        },
        {
          title: '9. Changes to This Policy',
          body: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with a revised "Last Updated" date.',
        },
        {
          title: '10. Contact Us',
          body: 'If you have questions about this Privacy Policy, please contact us using the Contact page.',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Get in Touch',
      description:
        "Have a project in mind or just want to say hello? I'd love to hear from you.",
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project or question...',
        submit: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! Your message has been sent. I\'ll get back to you soon.',
        error: 'Something went wrong. Please try again or email me directly.',
      },
    },
    footer: {
      tagline: 'Building the web, one line at a time.',
      rights: '© 2026 Lily Nagasawa. All rights reserved.',
      links: {
        privacy: 'Privacy Policy',
        about: 'About',
        contact: 'Contact',
      },
    },
  },

  ja: {
    nav: {
      works: '制作実績',
      about: 'について',
      contact: 'お問い合わせ',
      privacy: 'プライバシーポリシー',
    },
    hero: {
      greeting: 'こんにちは、私は',
      name: '長澤 Lily',
      title: 'Webデベロッパー / クリエイター',
      description:
        'モダンなWeb技術を駆使し、機能性と美しさを兼ね備えたデジタル体験を構築しています。UIの設計から実装まで、シンプルで直感的なソリューションを提供します。',
      cta: '実績を見る',
      scroll: 'スクロール',
    },
    works: {
      title: '制作実績',
      drag: 'ドラッグして探索',
      visit: 'サイトを見る',
      items: [
        {
          title: 'ドットコムマスターBASIC予想問題演習',
          subtitle: '演習問題アプリ',
          description:
            'ドットコムマスターBASIC資格試験のための演習問題Webアプリ。インタラクティブな問題集と進捗管理機能を提供します。',
          url: 'https://dcmb.mstr.site/',
          tag: '資格対策',
          image: '/images/dcmb_images.png',
        },
        {
          title: 'Japanese master',
          subtitle: 'ひらがな・カタカナワークシート',
          description:
            '日本語のひらがなとカタカナを学ぶためのインタラクティブなワークシートアプリ。印刷可能な練習シートとクイズを含みます。',
          url: 'https://japanese.mstr.site/',
          tag: '教育',
          image: '/images/jmstr_images.png',
        },
        {
          title: 'じっけんマスター',
          subtitle: 'おうちで楽しむ魔法のレシピ',
          description:
            '子どもが自宅で楽しめる科学実験サイト。120以上の実験を8つのカテゴリで提供。気分や教科で検索でき、実験ファイルのダウンロードも可能。',
          url: 'https://expt.mstr.site/index.html',
          tag: '教育',
          image: '/images/expt_images.png',
        },
      ],
    },
    about: {
      title: 'について',
      name: '長澤 Lily',
      role: 'Webデベロッパー / クリエイター',
      location: '横浜、日本',
      links: {
        github: 'GitHub',
        mail: 'メール',
      },
      section1: {
        label: '01',
        title: 'Webデベロッパー / クリエイター',
        body: 'モダンなWeb技術を駆使し、機能性と美しさを兼ね備えたデジタル体験を構築しています。ユーザーインターフェースの設計から実装までを一貫して行い、シンプルで直感的なソリューションを提供することを目指しています。',
      },
      section2: {
        label: '02',
        title: 'フォーカスと技術',
        body: '常に最新の技術スタックに触れ、特にNext.jsとTailwind CSSを活用した高速でレスポンシブな開発を得意としています。コードの品質はもちろん、タイポグラフィや余白を活かしたミニマルなデザインにも強いこだわりを持っています。',
      },
      section3: {
        label: '03',
        title: '掲載実績',
        body: '自身で企画・開発したWebアプリケーションや、学習の過程で構築したプロジェクトを公開しています。',
      },
    },
    privacy: {
      title: 'プライバシーポリシー',
      lastUpdated: '最終更新日: 2026年4月23日',
      intro:
        'このプライバシーポリシーは、mstr.site（以下「当サイト」）がウェブサイト訪問者の情報をどのように収集・使用・共有するかを説明します。',
      sections: [
        {
          title: '1. 収集する情報',
          body: '当サイトは、訪問時にIPアドレス、ブラウザの種類、OS、参照URL、閲覧ページなどの情報を自動的に収集する場合があります。この情報はCookieおよび類似の追跡技術を通じて収集されます。',
        },
        {
          title: '2. 情報の利用目的',
          body: '収集した情報は、サイトのトラフィックと利用パターンの分析、コンテンツとユーザーエクスペリエンスの改善、お問い合わせフォームからのご連絡への対応のために使用します。',
        },
        {
          title: '3. Google AdSenseと広告',
          body: '当サイトではGoogle AdSenseを使用して広告を表示しています。Googleは、当サイトまたは他のサイトへの過去の訪問に基づいてCookieを使用して広告を配信します。パーソナライズド広告をオプトアウトするには、GoogleのAd Settings（https://www.google.com/settings/ads）をご覧ください。',
        },
        {
          title: '4. Google Analytics',
          body: '当サイトでは、訪問者がサイトをどのように利用しているかを把握するためにGoogle Analyticsを使用する場合があります。Google Analytics Opt-out Browser Add-onをインストールすることでオプトアウトできます。',
        },
        {
          title: '5. Cookie',
          body: 'Cookieとは、お使いのデバイスに保存される小さなファイルです。ブラウザの設定でCookieを拒否することができますが、一部のサイト機能が正常に動作しない場合があります。',
        },
        {
          title: '6. 第三者サービス',
          body: '当サイトには外部サイトへのリンクが含まれる場合があります。それらのサイトのプライバシー慣行については当サイトは責任を負いません。',
        },
        {
          title: '7. データの保持',
          body: 'サービス提供と法的義務を果たすために必要な期間、収集した情報を保持します。お問い合わせフォームの送信内容は、対応が完了するまでの間のみ保持されます。',
        },
        {
          title: '8. お客様の権利',
          body: 'お客様は、当サイトが保有する個人情報へのアクセス、不正確なデータの訂正、および個人データの削除を要求する権利があります（法的義務の対象となる場合を除く）。',
        },
        {
          title: '9. ポリシーの変更',
          body: 'このプライバシーポリシーは随時更新される場合があります。変更があった場合は、改訂された「最終更新日」とともに本ページに新しいポリシーを掲載します。',
        },
        {
          title: '10. お問い合わせ',
          body: 'このプライバシーポリシーについてご質問がある場合は、お問い合わせページよりご連絡ください。',
        },
      ],
    },
    contact: {
      title: 'お問い合わせ',
      subtitle: 'ご連絡ください',
      description: 'プロジェクトのご相談やご質問など、お気軽にお問い合わせください。',
      form: {
        name: 'お名前',
        namePlaceholder: 'お名前を入力してください',
        email: 'メールアドレス',
        emailPlaceholder: 'your@email.com',
        message: 'メッセージ',
        messagePlaceholder: 'プロジェクトの内容やご質問をお書きください...',
        submit: '送信する',
        sending: '送信中...',
        success: 'ありがとうございます！メッセージを受け付けました。近日中にご返信いたします。',
        error: 'エラーが発生しました。もう一度お試しいただくか、直接メールをお送りください。',
      },
    },
    footer: {
      tagline: '一行ずつ、Webを築く。',
      rights: '© 2026 長澤 Lily. All rights reserved.',
      links: {
        privacy: 'プライバシーポリシー',
        about: 'について',
        contact: 'お問い合わせ',
      },
    },
  },
} as const
