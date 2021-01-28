import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children:
      'https://resource.rainyblossom.com/image/opensource/website/eu_logo-removebg-preview.png',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <p>首页</p>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
        },
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Feature30DataSource = {
  wrapper: { className: 'home-page-wrapper content3-wrapper' },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <p>优雅的开源商业工具集</p>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <p>—— 面向 Java 工程师的开发利器</p>
                </span>
              </span>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/ScHBSdwpTkAHZkJ.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Easy WeProgram</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <p>基于微信小程序公共文档的封装 SDK</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <p>Easy RedBook</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>基于小红书大学公共文档的封装 SDK</p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children:
              'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title',
            children: (
              <span>
                <span>
                  <p>Easy ExPress</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>基于各类物流商开放文档的封装 SDK</p>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Teams00DataSource = {
  wrapper: { className: 'home-page-wrapper teams0-wrapper' },
  OverPack: { playScale: 0.3, className: 'home-page teams0' },
  BannerAnim: {
    className: 'banner-anim',
    children: [
      {
        name: 'elem0',
        className: 'teams0-banner-user-elem',
        titleWrapper: {
          className: 'teams0-content-wrapper',
          children: [
            {
              name: 'image',
              children:
                'https://resource.rainyblossom.com/image/opensource/website/03E9B2DE-8619-485D-9396-1438E7184B9B.jpeg',
              className: 'teams0-image',
            },
            {
              name: 'content',
              children: (
                <span>
                  <p>热爱有趣且有意义的编码</p>
                </span>
              ),
              className: 'teams0-content',
            },
            {
              name: 'title',
              children: (
                <span>
                  <p>吴波</p>
                </span>
              ),
              className: 'teams0-h1',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <span>
                    <p>@宝尊电商 中级 Java 开发工程师</p>
                  </span>
                </span>
              ),
              className: 'teams0-content',
            },
          ],
        },
      },
    ],
  },
};
export const Footer10DataSource = {
  wrapper: {
    className: 'home-page-wrapper footer1-wrapper keh487l7c3e-editor_css',
  },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children:
            'https://resource.rainyblossom.com/image/opensource/website/eu_logo-removebg-preview.png',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>
                    一款优雅的商业工具集，致力于推动接口标准化以及代码复用原则。
                  </p>
                </span>
              ),
              className: 'keh48txctvh-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>项目</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>Easy WeProgram</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>Easy RedBook</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>Easy Express</p>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <span>
                <p>资源</p>
              </span>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>RainyBlossom 主站</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>Aegean FrameWork 引擎</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>关于</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>关于 EU</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>参与项目</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright keh49m0hbch-editor_css',
    children: (
      <span>
        <span>
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <p>
                      <span><a href="https://beian.miit.gov.cn">蒙ICP备16000384号-5&nbsp;</a></span>
                      <span>© 2021 寄雨瑶花</span>
                    </p>
                  </span>
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    ),
  },
};
