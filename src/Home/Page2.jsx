import React from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import { Button } from 'antd';

function Page2() {
  return (
    <div className="home-page page2">
      <div className="home-page-wrapper">
        <div className="title-line-wrapper page2-line">
          <div className="title-line" />
        </div>
        <h2>使用<span>HiveBot</span></h2>
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse className="page2-content">
            <p key="p" className="page-content">
              使用以下链接可以获取不同的安装服务
            </p>
            <div key="code1" className="home-code">
              <div>
              <span>在线安装程序</span> http://v.hiveai.cc/newv/mysetup.exe  <span className="home-code-comment">
                  // 秒下载
                </span>
              </div>
              <div> <span>离线包下载</span> http://v.hiveai.cc/newv/Hivebot.exe</div>
              <div>
                蜂巢版本Api
                <span className="home-code-comment">
                  // 打开浏览器访问 http://v.hiveai.cc/newv/edition.json
                </span>
              </div>
            </div>
            <p key="p2" className="page-content">
              需要帮助？请先阅读
              <a href='https://cy9129qwc8.feishu.cn/wiki/wikcnLn1Ex2F5GePiXXTc9eZT7e' target="_blank"> 开发文档 </a>
              或到社区
              <a href='https://com.hiveai.cc/' target="_blank"> 寻找相似问题 </a>， 如果未能解决，可以到 我们的QQ频道上
              <a href="https://pd.qq.com/s/9dcy6kjpl" target="_blank"> 进行提问 </a>。
            </p>
            <div key="button" style={{ marginTop: 88 }}>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Button type="primary">下载Hive Bot</Button>
              </a>
            </div>
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
}

export default Page2;
