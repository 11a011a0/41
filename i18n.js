/* ==========================================================
   41 Villa — i18n.js
   Language toggle: English ↔ Mandarin (简体中文)
   ========================================================== */

(function () {
  'use strict';

  var STORAGE_KEY  = 'villa41-lang';
  var DEFAULT_LANG = 'en';

  /* ── TRANSLATIONS ─────────────────────────────────────── */
  var T = {

    /* ── ENGLISH ─────────────────────────────────────────── */
    en: {

      /* toggle */
      'toggle.label': '中文',

      /* ── LANDING PAGE ── */
      'landing.estate-id':   'East Coast &nbsp;·&nbsp; Singapore',
      'landing.tagline':     'Neoclassical calm, pool-lit nights, sea breeze close by.',
      'landing.enter':       'Enter the Estate',
      'landing.gyro':        'Tilt to explore',
      'landing.badge':       '41 Villa &nbsp;·&nbsp; Singapore',

      /* ── SHARED NAV ── */
      'nav.overview':        'Overview',
      'nav.experience':      'Experience',
      'nav.residence':       'Residence',
      'nav.highlights':      'Highlights',
      'nav.film':            'Film',
      'nav.gallery':         'Gallery',
      'nav.invitations':     'Invitations',
      'nav.arrange-short':   'Arrange Viewing',
      'nav.arrange-long':    'Arrange a Private Viewing',
      'nav.pg':              'PropertyGuru',
      'nav.pg-long':         'PropertyGuru Listing',
      'nav.home':            'Home',

      /* ── SPECS — HERO ── */
      'spec.hero.kicker':      '41 Villa &nbsp;·&nbsp; Neoclassical detached &nbsp;·&nbsp; East Coast / Marine Parade',
      'spec.hero.title':       'It does not impose —<br>it composes.',
      'spec.hero.stat1.label': 'Land sqft (approx.)',
      'spec.hero.stat2.label': 'Tao Nan Primary',
      'spec.hero.stat3.label': 'Expressway access',
      'spec.hero.explore':     'Explore the Estate',
      'spec.hero.scroll':      'Scroll',

      /* ── SPECS — OVERVIEW ── */
      'spec.ov.eyebrow': 'The Property',
      'spec.ov.title':   'Overview',
      'spec.ov.lead':    'A neoclassical residence in Marine Parade — restrained in footprint, generous in intention. Built-up, room counts, and the full neighbourhood context live on PropertyGuru under What\'s Nearby; here, the narrative of how the home lives and breathes.',
      'spec.ov.c1.title': 'Land',
      'spec.ov.c1.value': '~6,000 sqft (approx.)',
      'spec.ov.c2.title': 'Architecture',
      'spec.ov.c2.value': 'Neoclassical detached',
      'spec.ov.c3.title': 'Pool',
      'spec.ov.c3.value': '15m lap, notable width',
      'spec.ov.c4.title': 'Arrival',
      'spec.ov.c4.value': 'Forecourt &amp; twin gate',
      'spec.ov.c5.title': 'Schools &amp; roads',
      'spec.ov.c5.value': 'Tao Nan · ECP / PIE',
      'spec.ov.c6.title': 'Full listing',
      'spec.ov.c6.value': 'PropertyGuru',

      /* ── SPECS — EXPERIENCE ── */
      'spec.exp.eyebrow': 'Philosophy',
      'spec.exp.title':   'Space, proportion, and light',
      'spec.exp.lead':    'On approximately 6,000 square feet of prized landed ground, this neoclassical residence does not impose — it composes.',
      'spec.exp.p1': 'It occupies only what it must, allowing space, proportion, and light to define its presence. What remains is not emptiness, but intention — an architectural pause that elevates the experience of arrival.',
      'spec.exp.p2': 'The approach is unmistakable.',
      'spec.exp.p3': 'A sweeping forecourt — increasingly rare in modern builds — unfolds like a private estate, where manicured lawns, sculpted greenery, and resort-inspired elements create a quiet sense of occasion long before entry.',
      'spec.exp.p4': 'This is not a home that seeks to maximise land. It is one that understands restraint — and in doing so, achieves distinction.',
      'spec.exp.b1': 'Approximately 1.28km to Tao Nan Primary School',
      'spec.exp.b2': 'Seamless access to ECP and PIE',
      'spec.exp.b3': 'Refer to &ldquo;What&rsquo;s Nearby&rdquo; on PropertyGuru for full lifestyle context',
      'spec.exp.pullquote': 'For those who recognise beauty not by accident, but by instinct — this is a private invitation.',

      /* ── SPECS — RESIDENCE ── */
      'spec.res.eyebrow': 'Floor by floor',
      'spec.res.title':   'The residence',
      'spec.res.lead':    'Described in full below — without relying on interior photography, so the architecture can speak for itself.',
      'spec.res.l1.label': 'I',
      'spec.res.l1.title': 'Arrival',
      'spec.res.l1.p1': 'A classical twin-leaf gate opens inward, revealing a measured transition from street to sanctuary. A generous forecourt accommodates two vehicles, framed by a villa-style landscape — anchored by a full-grown palm and a 15-metre lap pool of notable width and presence.',
      'spec.res.l1.p2': 'An outdoor dining terrace, complete with a built-in preparation counter and water point, overlooks the water — designed as much for quiet evenings as it is for hosting.',
      'spec.res.l1.p3': 'The residence unfolds laterally. To the right, a koi pond traces the edge of the home, leading towards an outdoor wet kitchen — discreet, yet fully functional. To the left, a continuous garden spine guides one toward the service quarters at the rear, maintaining separation without compromise.',
      'spec.res.l1.p4': 'At the fa&ccedil;ade, twin Roman columns rise in quiet confidence, supporting a semi-circular balcony with refined classical detailing — echoed across window frames, awnings, and balustrades.',
      'spec.res.l2.label': 'II',
      'spec.res.l2.title': 'Ground level',
      'spec.res.l2.p1': 'Entry reveals a space defined by openness and symmetry.',
      'spec.res.l2.p2': 'A formal living area sits to one side, balanced by a tea lounge overlooking the water garden — an interplay of interior calm and exterior movement. Beyond, a media and piano space anchors the heart of the home, while a sculptural staircase with integrated shelving leads upward.',
      'spec.res.l2.p3': 'The dining hall extends toward the rear, comfortably accommodating a 14-seater — proportioned for both family and occasion.',
      'spec.res.l2.p4': 'The dry kitchen sits beyond, accompanied by a storeroom and fully self-contained helper&rsquo;s quarters.',
      'spec.res.l2.p5': 'A generously sized en-suite room on this level offers flexibility — equally suited as a junior suite or a private entertainment lounge.',
      'spec.res.l3.label': 'III',
      'spec.res.l3.title': 'Level two',
      'spec.res.l3.p1': 'The master suite commands the front of the residence, with direct access to the semi-circular balcony — framed by classical columns, offering both privacy and presence.',
      'spec.res.l3.p2': 'A private lounge sits adjacent, while the central landing opens into a family living area with pantry — a deliberate pause between private spaces.',
      'spec.res.l3.p3': 'At the rear, four well-proportioned bedrooms share a common bath, supported by an additional storeroom.',
      'spec.res.l4.label': 'IV',
      'spec.res.l4.title': 'Level three',
      'spec.res.l4.p1': 'A secondary pantry anchors the level.',
      'spec.res.l4.p2': 'To the front, a junior master suite incorporates a dedicated workspace and walk-in wardrobe — designed for both function and retreat.',
      'spec.res.l4.p3': 'The rear comprises four additional bedrooms, each with ceiling volumes sufficient for loft integration. Two enjoy private balcony access, extending the living experience outward. All four lofts share a common bath.',
      'spec.res.l5.label': 'V',
      'spec.res.l5.title': 'Level four',
      'spec.res.l5.p1': 'At the pinnacle, a flexible indoor space presents itself — suited for a gym, studio, or private lounge.',
      'spec.res.l5.p2': 'Surrounding terraces offer opportunities for curated outdoor living: a rooftop garden, an entertainment deck, or a quiet space for reflection above it all.',

      /* ── SPECS — HIGHLIGHTS ── */
      'spec.hl.eyebrow': 'Key Features',
      'spec.hl.title':   'Highlights',
      'spec.hl.h1': 'Neoclassical facade with classical columns',
      'spec.hl.h2': 'Resort-style swimming pool',
      'spec.hl.h3': 'Arrival forecourt — car porch, pool &amp; columns',
      'spec.hl.h4': 'Warm architectural lighting at night',
      'spec.hl.h5': 'Outdoor dining deck overlooking the pool',
      'spec.hl.h6': 'Generous living &amp; dining with tea corner',
      'spec.hl.h7': 'Curated stair hall with display &amp; seating',
      'spec.hl.h8': 'East Coast / Marine Parade landed setting',
      'spec.hl.pg':  'View on PropertyGuru',

      /* ── SPECS — FILM ── */
      'spec.film.eyebrow': 'Cinematic tour',
      'spec.film.title':   'Film',
      'spec.film.lead':    'A night-time pass through the estate — facade, pool, and grounds in motion.',
      'spec.film.caption': 'Approx. 37 seconds — best with sound. Hosted on YouTube for smooth playback on any device.',

      /* ── SPECS — GALLERY ── */
      'spec.gal.eyebrow': 'The Estate in Images',
      'spec.gal.title':   'Gallery',

      /* ── SPECS — INVITATIONS ── */
      'spec.inv.eyebrow': 'Private Events',
      'spec.inv.title':   'Invitations',
      'spec.inv.lead':    '41 Villa is made for hosting — poolside evenings, formal dinners, or intimate gatherings. Generate a private invite link and share it with your guests in seconds.',
      'spec.inv.c1.title': 'Create an Invitation',
      'spec.inv.c1.body':  'Set the event title, a 60-character description, and date &amp; time. Your personalised invite link is generated instantly — no account needed.',
      'spec.inv.c2.title': 'Private Sharing',
      'spec.inv.c2.body':  'Each invite link is uniquely encoded. Share it directly with guests — only those with the link can view the event details.',
      'spec.inv.c3.title': 'Guest Experience',
      'spec.inv.c3.body':  'Guests receive a luxury digital card with a one-tap WhatsApp RSVP, Google Maps directions, and an Add to Calendar button for both Apple and Google Calendar.',
      'spec.inv.wa':       'Reach Out on WhatsApp',

      /* ── SPECS — FOOTER ── */
      'spec.footer.pg': 'PropertyGuru Listing',

      /* ── HOST PAGE ── */
      'host.back':          'Home',
      'host.eyebrow':       'Owner Portal',
      'host.title':         'Create an Invitation',
      'host.sub':           'Fill in the event details below to generate a shareable invite link for your guests at 41 Villa.',
      'host.label.title':   'Event Title',
      'host.ph.title':      'e.g. Rooftop Dinner, Poker Night, Garden BBQ',
      'host.label.desc':    'Description',
      'host.hint.desc':     'Keep it punchy — your guests will see this on the invite.',
      'host.ph.desc':       'A short description of the event (60 characters max)',
      'host.label.date':    'Date &amp; Time',
      'host.label.phone':   'Your WhatsApp Number',
      'host.note.phone':    'Guests will send their RSVP directly to you on WhatsApp.',
      'host.btn.generate':  'Generate Invite Link',
      'host.result.label':  'Your Invite Link',
      'host.btn.copy':      'Copy',
      'host.btn.copied':    'Copied!',
      'host.result.note':   'Share this link with your guests. They will see the event details along with a map, calendar button, and RSVP via WhatsApp.',
      'host.preview.label': 'Preview',
      'host.footer':        '41 Villa',

      /* ── INVITE PAGE ── */
      'inv.kicker':        'You are invited',
      'inv.meta.date':     'Date &amp; Time',
      'inv.meta.venue':    'Venue',
      'inv.venue.addr':    '41 Villa — 41 Lorong H Telok Kurau, Singapore 426034',
      'inv.btn.rsvp':      'RSVP via WhatsApp',
      'inv.btn.maps':      'View on Google Maps',
      'inv.btn.gcal':      'Add to Google Calendar',
      'inv.btn.acal':      'Add to Apple Calendar',
      'inv.footer':        'Hosted at <a href="../specifications/">41 Villa</a> &nbsp;·&nbsp; Singapore',
      'inv.error.title':   'Invalid Invitation',
      'inv.error.msg':     'This invite link is missing or has expired.<br>Please request a new link from the host.'
    },

    /* ── MANDARIN (简体中文) ─────────────────────────────── */
    zh: {

      /* toggle */
      'toggle.label': 'EN',

      /* ── LANDING PAGE ── */
      'landing.estate-id':   '东海岸 &nbsp;·&nbsp; 新加坡',
      'landing.tagline':     '新古典主义的宁静，泳池灯火的夜晚，海风近在咫尺。',
      'landing.enter':       '进入庄园',
      'landing.gyro':        '倾斜探索',
      'landing.badge':       '41 别墅 &nbsp;·&nbsp; 新加坡',

      /* ── SHARED NAV ── */
      'nav.overview':        '概览',
      'nav.experience':      '体验',
      'nav.residence':       '住宅',
      'nav.highlights':      '亮点',
      'nav.film':            '影片',
      'nav.gallery':         '图库',
      'nav.invitations':     '邀请函',
      'nav.arrange-short':   '安排看房',
      'nav.arrange-long':    '安排私人看房',
      'nav.pg':              'PropertyGuru',
      'nav.pg-long':         'PropertyGuru 房源',
      'nav.home':            '首页',

      /* ── SPECS — HERO ── */
      'spec.hero.kicker':      '41 别墅 &nbsp;·&nbsp; 新古典独立洋房 &nbsp;·&nbsp; 东海岸 / 马林百列',
      'spec.hero.title':       '不强加——<br>只构筑。',
      'spec.hero.stat1.label': '土地面积（约）',
      'spec.hero.stat2.label': '道南小学',
      'spec.hero.stat3.label': '快速公路通道',
      'spec.hero.explore':     '探索庄园',
      'spec.hero.scroll':      '向下浏览',

      /* ── SPECS — OVERVIEW ── */
      'spec.ov.eyebrow': '物业简介',
      'spec.ov.title':   '概览',
      'spec.ov.lead':    '坐落于马林百列的新古典主义住宅——用地克制，格局从容。建筑面积、房间数量及完整周边配套，均可在 PropertyGuru「周边设施」栏目查阅；此处呈现的，是这座家宅的居住叙事。',
      'spec.ov.c1.title': '土地',
      'spec.ov.c1.value': '约 6,000 平方英尺',
      'spec.ov.c2.title': '建筑风格',
      'spec.ov.c2.value': '新古典独立洋房',
      'spec.ov.c3.title': '泳池',
      'spec.ov.c3.value': '15米泳道，宽度可观',
      'spec.ov.c4.title': '入口',
      'spec.ov.c4.value': '前院与双开大门',
      'spec.ov.c5.title': '学校与道路',
      'spec.ov.c5.value': '道南 · ECP / PIE',
      'spec.ov.c6.title': '完整房源',
      'spec.ov.c6.value': 'PropertyGuru',

      /* ── SPECS — EXPERIENCE ── */
      'spec.exp.eyebrow': '设计理念',
      'spec.exp.title':   '空间、比例与光线',
      'spec.exp.lead':    '在约 6,000 平方英尺的珍贵有地地块上，这座新古典主义住宅不以气势压人——而是以构筑语言塑造空间。',
      'spec.exp.p1': '它只占据必要之处，让空间、比例与光线自然定义其存在。留白之处并非空洞，而是意图——一种将抵达体验升华的建筑沉默。',
      'spec.exp.p2': '入口序列令人印象深刻。',
      'spec.exp.p3': '一片宽阔的前院——在现代建筑中愈发罕见——如私人庄园般徐徐展开，修剪整洁的草坪、精心雕琢的绿植与度假风情元素，在踏入门槛之前便已营造出静谧的仪式感。',
      'spec.exp.p4': '这不是一座追求最大化用地的住宅，而是一座懂得克制的家宅——正因如此，方显超凡。',
      'spec.exp.b1': '距道南小学约 1.28 公里',
      'spec.exp.b2': '便捷接驳 ECP 与 PIE 快速公路',
      'spec.exp.b3': '完整周边配套详见 PropertyGuru「周边设施」',
      'spec.exp.pullquote': '对于那些凭直觉而非偶然识别美的人——这是一份私人邀请。',

      /* ── SPECS — RESIDENCE ── */
      'spec.res.eyebrow': '逐层介绍',
      'spec.res.title':   '住宅空间',
      'spec.res.lead':    '以下为完整文字描述——不依赖室内摄影，让建筑自己发声。',
      'spec.res.l1.label': 'I',
      'spec.res.l1.title': '入口序列',
      'spec.res.l1.p1': '一扇古典双开大门向内而启，呈现出从街道到私宅的有序过渡。宽阔前院可停放两辆车辆，四周是别墅式园景——以一棵成年棕榈树和一座宽阔的 15 米泳道泳池为核心，气度不凡。',
      'spec.res.l1.p2': '户外用餐露台配有内嵌式备餐台与水龙头，俯瞰水景——既适合静谧夜晚，也是举办活动的理想场所。',
      'spec.res.l1.p3': '住宅向两侧展开。右侧，一方锦鲤池沿屋边蜿蜒，通向户外湿式厨房——低调而功能完备。左侧，一条连续的花园脉络延伸至后方工人房，实现空间分隔而不失体验完整。',
      'spec.res.l1.p4': '正立面上，一对罗马式廊柱沉稳而立，承托半圆形阳台，精致古典细节贯穿其中——于窗框、雨篷与栏杆之间一一呼应。',
      'spec.res.l2.label': 'II',
      'spec.res.l2.title': '地面层',
      'spec.res.l2.p1': '步入其间，空间以开阔与对称迎人。',
      'spec.res.l2.p2': '正式客厅居一侧，与俯瞰水花园的茶室相互呼应——室内的宁静与室外的流动形成对话。往内，视听与钢琴空间是家宅核心所在，一座融入书架的雕塑式楼梯引领视线向上。',
      'spec.res.l2.p3': '餐厅向后延伸，可舒适容纳 14 人入席——比例既适合家庭日常，也契合正式场合。',
      'spec.res.l2.p4': '干式厨房位于餐厅之外，配有储物间与全套独立工人房。',
      'spec.res.l2.p5': '本层另设一间宽敞套房，灵活性强——可作次卧套房，亦可用作私人娱乐室。',
      'spec.res.l3.label': 'III',
      'spec.res.l3.title': '二楼',
      'spec.res.l3.p1': '主卧套房坐镇住宅前方，可直接通往半圆形阳台——古典廊柱为框，兼具私密与气度。',
      'spec.res.l3.p2': '私人休息室紧邻其侧，中央楼台通向带备餐区的家庭起居空间——作为私密空间之间刻意设置的过渡。',
      'spec.res.l3.p3': '后方四间比例匀称的卧室共享公共浴室，并设有额外储物间。',
      'spec.res.l4.label': 'IV',
      'spec.res.l4.title': '三楼',
      'spec.res.l4.p1': '备餐区锚定本层空间。',
      'spec.res.l4.p2': '前方次主卧套房融合专属工作区与步入式衣橱——兼顾功能与私人退处。',
      'spec.res.l4.p3': '后方四间卧室各具阁楼高度，空间改造潜力可观。其中两间拥有私人阳台，将居住体验向外延伸。四间阁楼共享公共浴室。',
      'spec.res.l5.label': 'V',
      'spec.res.l5.title': '四楼',
      'spec.res.l5.p1': '顶层设有一处弹性室内空间——可作健身房、工作室或私人休息室。',
      'spec.res.l5.p2': '环绕露台为多元室外生活提供可能：屋顶花园、娱乐甲板，或是凌驾一切之上的静思之所。',

      /* ── SPECS — HIGHLIGHTS ── */
      'spec.hl.eyebrow': '主要特色',
      'spec.hl.title':   '亮点',
      'spec.hl.h1': '新古典主义外立面，配古典廊柱',
      'spec.hl.h2': '度假风格泳池',
      'spec.hl.h3': '入口前院——车道、泳池与廊柱',
      'spec.hl.h4': '夜间温暖建筑灯光',
      'spec.hl.h5': '俯瞰泳池的户外用餐露台',
      'spec.hl.h6': '宽敞客餐厅与茶室一角',
      'spec.hl.h7': '精心布置的楼梯厅，含展示架与座椅',
      'spec.hl.h8': '东海岸 / 马林百列有地住宅地段',
      'spec.hl.pg':  '在 PropertyGuru 查看',

      /* ── SPECS — FILM ── */
      'spec.film.eyebrow': '电影式游览',
      'spec.film.title':   '影片',
      'spec.film.lead':    '夜间穿越庄园——外立面、泳池与庭院的动态影像。',
      'spec.film.caption': '约 37 秒——建议开启声音观看。托管于 YouTube，适配各类设备流畅播放。',

      /* ── SPECS — GALLERY ── */
      'spec.gal.eyebrow': '庄园图集',
      'spec.gal.title':   '图库',

      /* ── SPECS — INVITATIONS ── */
      'spec.inv.eyebrow': '私人活动',
      'spec.inv.title':   '邀请函',
      'spec.inv.lead':    '41 别墅专为接待而生——泳池旁的夜晚、正式晚宴或亲密聚会。几秒内生成私人邀请链接，轻松与宾客分享。',
      'spec.inv.c1.title': '创建邀请函',
      'spec.inv.c1.body':  '填写活动标题、不超过 60 字符的描述及日期与时间，即时生成专属邀请链接——无需注册账号。',
      'spec.inv.c2.title': '私密分享',
      'spec.inv.c2.body':  '每份邀请链接均经过独特编码，直接与宾客分享——仅持有链接者可查看活动详情。',
      'spec.inv.c3.title': '宾客体验',
      'spec.inv.c3.body':  '宾客将收到精美数字邀请卡，一键 WhatsApp 确认出席，Google 地图导航，以及苹果与谷歌日历添加按钮。',
      'spec.inv.wa':       '通过 WhatsApp 联系',

      /* ── SPECS — FOOTER ── */
      'spec.footer.pg': 'PropertyGuru 房源',

      /* ── HOST PAGE ── */
      'host.back':          '首页',
      'host.eyebrow':       '业主门户',
      'host.title':         '创建邀请函',
      'host.sub':           '填写以下活动详情，为 41 别墅的宾客生成可分享的邀请链接。',
      'host.label.title':   '活动标题',
      'host.ph.title':      '例如：屋顶晚宴、扑克之夜、花园烧烤',
      'host.label.desc':    '活动描述',
      'host.hint.desc':     '简洁有力——宾客将在邀请函上看到此描述。',
      'host.ph.desc':       '简短描述活动内容（最多 60 字符）',
      'host.label.date':    '日期与时间',
      'host.label.phone':   '您的 WhatsApp 号码',
      'host.note.phone':    '宾客将通过 WhatsApp 直接向您确认出席。',
      'host.btn.generate':  '生成邀请链接',
      'host.result.label':  '您的邀请链接',
      'host.btn.copy':      '复制',
      'host.btn.copied':    '已复制！',
      'host.result.note':   '将此链接分享给宾客。他们将看到活动详情、地图、日历按钮及 WhatsApp RSVP。',
      'host.preview.label': '预览',
      'host.footer':        '41 别墅',

      /* ── INVITE PAGE ── */
      'inv.kicker':        '您收到邀请',
      'inv.meta.date':     '日期与时间',
      'inv.meta.venue':    '场地',
      'inv.venue.addr':    '41 别墅 — 41 Lorong H Telok Kurau, 新加坡 426034',
      'inv.btn.rsvp':      '通过 WhatsApp 确认出席',
      'inv.btn.maps':      '在谷歌地图查看',
      'inv.btn.gcal':      '添加到谷歌日历',
      'inv.btn.acal':      '添加到苹果日历',
      'inv.footer':        '于 <a href="../specifications/">41 别墅</a> 举办 &nbsp;·&nbsp; 新加坡',
      'inv.error.title':   '无效邀请',
      'inv.error.msg':     '此邀请链接无效或已过期。<br>请向主办方申请新的邀请链接。'
    }
  };

  /* ── HELPERS ──────────────────────────────────────────── */
  function getCurrentLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    if (lang === 'zh') loadCJKFont();
    applyLang(lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  function applyLang(lang) {
    var dict = T[lang] || T[DEFAULT_LANG];

    /* Replace innerHTML for [data-i18n] elements */
    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        els[i].innerHTML = dict[key];
      }
    }

    /* Replace placeholder text */
    var pls = document.querySelectorAll('[data-i18n-placeholder]');
    for (var j = 0; j < pls.length; j++) {
      var pk = pls[j].getAttribute('data-i18n-placeholder');
      if (dict[pk] !== undefined) {
        pls[j].placeholder = dict[pk];
      }
    }

    /* Update toggle button label */
    var btn = document.getElementById('langToggle');
    if (btn && dict['toggle.label']) {
      btn.textContent = dict['toggle.label'];
    }
  }

  /* ── INJECT STYLES ────────────────────────────────────── */
  function injectStyles() {
    var css = [
      '#langToggle {',
      '  display: inline-flex; align-items: center; justify-content: center;',
      '  font-family: \'Montserrat\', system-ui, -apple-system, sans-serif;',
      '  font-size: 0.62rem; font-weight: 300; letter-spacing: 0.18em;',
      '  text-transform: uppercase; cursor: pointer;',
      '  border: 1px solid rgba(201,168,76,0.45);',
      '  color: #c9a84c; background: transparent;',
      '  padding: 0.35rem 0.7rem; border-radius: 2px;',
      '  transition: background 0.3s, color 0.3s, border-color 0.3s;',
      '  white-space: nowrap;',
      '}',
      '#langToggle:hover {',
      '  background: #c9a84c; color: #fff; border-color: #c9a84c;',
      '}',
      /* Fixed button for pages without a nav */
      '#langToggle.is-fixed {',
      '  position: fixed; top: 1rem; right: clamp(3.5rem, 8vw, 5rem);',
      '  z-index: 200;',
      '}',
      /* Chinese font override: replace decorative serif (Cormorant Garamond) with system CJK sans */
      ':lang(zh-CN) { font-family: "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", system-ui, -apple-system, sans-serif; }',
      ':lang(zh-CN) .hero__title, :lang(zh-CN) .tagline, :lang(zh-CN) .h2, :lang(zh-CN) .page-title,',
      ':lang(zh-CN) .card__title, :lang(zh-CN) .preview__title, :lang(zh-CN) .error-title {',
      '  font-family: "Noto Serif SC", "Songti SC", "SimSun", "STSong", serif;',
      '  font-style: normal;',
      '}'
    ].join('\n');

    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  /* ── LOAD CJK FONT ────────────────────────────────────── */
  var _cjkLoaded = false;
  function loadCJKFont() {
    if (_cjkLoaded) return;
    _cjkLoaded = true;
    /* Noto Sans SC for body text, Noto Serif SC for display headings */
    var link = document.createElement('link');
    link.rel  = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@200;300;400&family=Noto+Serif+SC:wght@200;300;400&display=swap';
    document.head.appendChild(link);
  }

  /* ── INJECT TOGGLE BUTTON ─────────────────────────────── */
  function injectToggle(lang) {
    if (document.getElementById('langToggle')) return;

    var btn = document.createElement('button');
    btn.id   = 'langToggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Switch language / 切换语言');
    btn.setAttribute('title', 'Switch language / 切换语言');

    /* Prefer placing inside the nav actions row */
    var navActions = document.querySelector('.nav__actions');
    if (navActions) {
      navActions.insertBefore(btn, navActions.firstChild);
    } else {
      /* Fallback: fixed button */
      btn.classList.add('is-fixed');
      document.body.appendChild(btn);
    }

    btn.addEventListener('click', function () {
      setLang(getCurrentLang() === 'zh' ? 'en' : 'zh');
    });
  }

  /* ── INIT ─────────────────────────────────────────────── */
  function init() {
    injectStyles();
    var lang = getCurrentLang();
    if (lang === 'zh') loadCJKFont();
    injectToggle(lang);
    applyLang(lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
