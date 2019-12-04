var tipuesearch = {"pages":[{"title":"About","text":"CMSimfly 內容管理網誌 個人倉儲: https://github.com/s40723210/cad2019 個人網頁: https://s40723210.github.io/cad2019/ 投影片: https://s40723210.github.io/cad2019/reveal/index.html#/ 個人網誌: https://40723210.blogspot.com/","tags":"misc","url":"./pages/about/"},{"title":"Week12","text":"Webots 與 V-rep Tutorial的操作 Webots Tutorial-1 目前系上已經沒有 32 位元 Windows 操作系統的電腦, 所以先前只要有學生提到所使用的電腦是舊型 32 位元的 Windows XP 或 Windows 7, 都無法提供相應的可攜程式系統. 但是, 當您桌上就只一台早期 Sony 推出的 VGC-LM26T 電腦, 採用 Intel core 2 Duo T8100 2.1 GHz 裝載 32 位元 Windows 7, 記憶體只有 2GB 的老舊電腦. 夠用嗎? 當然可以, 使用的是特別製作的 32 位元可攜系統 , 除了不支援 Eric6 之外, 其餘功能都與 64 位元的 p37 相同. V-rep bubbleRob Tutorial 從 2018 Fall 開始, 前半學期希望每位計算機程課程的學員, 都能透過 2018 計算機程式教材 內容, 深入學習 Python 3 各種程式語法, 利用 CMSimfly 、 Pelican 與 Reveal.js , 熟悉如何在 Github 配置自己的網站、網誌與網際簡報系統. 使用時, 啟動隨身系統的 start.bat, 利用命令列指令, git clone https://github.com/mdecourse/2018fall, 然後將內容配置在各自的 Github 帳號下. 程式專案 早在 1999 年, 就已經開始進行所謂 網際機械設計資源中心 的構建, 想像中的資源中心是一套網際專家系統, 包含各式機械設計流程中所需的模組, 全部依附在一個相對穩定, 可以持續改進的核心架構下, 類似 docassemble 的一套系統. 將近二十年過去, 網際機械設計資源中心 始終仍只有片段系統, 其中包含 CMSimfly 、 Pygrouf 與 Pyslvs ( Pyslvs 手冊 )等相關專案. 就如同 如何寫出有用的程式? 一文中所述, \"沒有興趣不要來念資工\" 是一句非常貼切的警語, 當學生對於程式設計提不起興趣, 沒有將所學的各式語法、資料結構與演算法, 套用在自己非常有興趣的領域中, 用來解決各式問題的話, 日復一日, 我們還是寫不出任何有用的程式! 早該起頭的重要工作 計算機程式的重要性 其實已經無需爭辯, 人類未來的許多工作都是透過網路與數位運算達成, 既知趨勢如此, 每一位工程師就該越早起頭原本就該進行的重要工作, 透過計算機程式來解決問題, 構築一個值得長期投注心力的程式專案.","tags":"Misc","url":"./Webots and V-rep Tutorial.html"},{"title":"Week10","text":"pull requests 各組開始協同倉儲，因為我是組長就創建第五組倉儲，並且回報lssues，所有的組員都必須要fork分組倉儲，然後使用pull requests來進行更新，也要處理並解決網址、簡報、網誌出現的 markdown 改版衝突，而pull requests有分為正向及反向。 組員擁有(merge)的權力，也就是可以自己進行pull request，不需要經過組長的同意，就可以直接合併(merge)，不過這樣就會出比較多的問題，可能有些人更改的內容直接被蓋掉，要解決的話可能會出現很多衝突，所以不建議給太多人擁有(merge)權力，像是我只有給一位組員(merge)權力，這樣子他就可以幫我審核，其他組員的pull request，也能幫我進行同意合併。 pull requests正向是組員點選New pull request將資料推送回各組倉儲，再由組長進行審核，確認無誤之後即可按同意來合併，有衝突時，組員必須回到fork倉儲，輸入git pull \"fork倉儲網址\"，再New pull request一次，組長同意後即可。 pull requests反向一樣是組員點選New pull request，不過要特別改成分組倉儲退送至個人倉儲，意思就是把個人的倉儲版次更新，然後在自己點選同意，不過這樣子比較麻煩，還不如直接輸入git pull \"fork倉儲網址\"，這樣子比較快，直接就更新到最新版次。 第五組倉儲網址:https://s40723210.github.io/cad2019bg5/ Fork倉儲 1.先登入github，在搜尋自己組的倉儲，點進去。 2.點選右上角的Fork，選擇自己的github。 3.git clone --recurse-submodules (倉儲網址)。 4.git push完成，點選New pull request，等組長同意。 5.有衝突的話，進行git pull (倉儲網址) 。 6.整合完成之後即可git push，等待組長同意。 我的教學影片(有字幕):https://youtu.be/1bZ16BgmF8c 虛擬主機版NX12 可以在學校外面，使用的正版NX12，不用再去設定VPN。 1.下載VirtualBox以及老師給的NX12.0.2 虛擬主機板。 2.設定一下VirtualBox來建立一個虛擬主機。 3.將老師的NX12虛擬硬碟導入虛擬主機裡面。 4.啟動完成後，開啟NX12測試功能是否正常。 5.使用網路探索，來點選網路內的VBOXSVR。 6.新增一個跟主機共用的資料夾，再拉到桌面。 7.再將檔案拖入，回到原本主機檢查，是否有檔案。 我的教學影片(有字幕): Batch Command設定 我的教學影片(有字幕):https://youtu.be/Zw1n_6ba4C8 導入 GitExtensions 我的教學影片(有字幕):https://youtu.be/1j9J9JUULEo","tags":"Misc","url":"./fork and pull requests.html"},{"title":"電腦輔助設計實習-期中報告","text":"期中報告 網址: https://youtu.be/dWtvxaCwQTg 心得: 從Week 2 - Week 9中我學到了很多的東西，這一學期使用的是亂數分組，所以組員有些都不太熟，一開始一樣都是創一個倉儲，然後維護他，將每周的內容和影片都上傳上去，Solvespace 是一個很小的繪圖軟體，可以隨身攜帶，所以非常的方便，只是功能不多而已，它跟我們之前所學的繪圖軟體不太一樣，所以我花了一點的時間去熟悉它，再來就是V-rep 這個軟體，我們教了一下，就換成Webots了，因為Webots是免費的軟體，而且又比V-rep還多功能，所以我很好奇學不學會。 每一周的影片在我的網頁 s40723210 和 reveal Week 2: 進行亂數分組 課程、評分標準的說明 建立個人倉儲cad2019 Week 3: Solvespace編譯 Week 4: 處理自己的倉儲 將每周進度完成 上傳有字幕的操作影片 Week 5: Solvespace 操作 Week 6: 參數化零組件繪製 網際 V-rep 模型控制 新增啟動與停止按鈕 Week 7: 全班使用統一網站架構 Solvespace 納入學號 Solvespace 繪圖驗證 Week 8: 啟用 CMSiMDE中的網誌系統 導入 Webots 以ssh對Github 連線","tags":"Misc","url":"./2018-Fall-32-bit-Windows-w9.html"},{"title":"2018 Fall CP 課程","text":"2018 Fall 一開始, 在一台已經 10 年的 32 位元的 Windows 7 操作系統中工作. 可攜的 Python 3.7.0 仍然可以配置, Leo Editor、PyQt5、flask、Markdown、pelican 與 bs4 的安裝, 也都沒有問題. 只有 Eric6 因為缺少必要模組與 Python 3.7.0 對應的 pyqt5-tools, 因此沒有安裝. 電腦規格 目前系上已經沒有 32 位元 Windows 操作系統的電腦, 所以先前只要有學生提到所使用的電腦是舊型 32 位元的 Windows XP 或 Windows 7, 都無法提供相應的可攜程式系統. 但是, 當您桌上就只一台早期 Sony 推出的 VGC-LM26T 電腦, 採用 Intel core 2 Duo T8100 2.1 GHz 裝載 32 位元 Windows 7, 記憶體只有 2GB 的老舊電腦. 夠用嗎? 當然可以, 使用的是特別製作的 32 位元可攜系統 , 除了不支援 Eric6 之外, 其餘功能都與 64 位元的 p37 相同. 工作流程 從 2018 Fall 開始, 前半學期希望每位計算機程課程的學員, 都能透過 2018 計算機程式教材 內容, 深入學習 Python 3 各種程式語法, 利用 CMSimfly 、 Pelican 與 Reveal.js , 熟悉如何在 Github 配置自己的網站、網誌與網際簡報系統. 使用時, 啟動隨身系統的 start.bat, 利用命令列指令, git clone https://github.com/mdecourse/2018fall, 然後將內容配置在各自的 Github 帳號下. 程式專案 早在 1999 年, 就已經開始進行所謂 網際機械設計資源中心 的構建, 想像中的資源中心是一套網際專家系統, 包含各式機械設計流程中所需的模組, 全部依附在一個相對穩定, 可以持續改進的核心架構下, 類似 docassemble 的一套系統. 將近二十年過去, 網際機械設計資源中心 始終仍只有片段系統, 其中包含 CMSimfly 、 Pygrouf 與 Pyslvs ( Pyslvs 手冊 )等相關專案. 就如同 如何寫出有用的程式? 一文中所述, \"沒有興趣不要來念資工\" 是一句非常貼切的警語, 當學生對於程式設計提不起興趣, 沒有將所學的各式語法、資料結構與演算法, 套用在自己非常有興趣的領域中, 用來解決各式問題的話, 日復一日, 我們還是寫不出任何有用的程式! 早該起頭的重要工作 計算機程式的重要性 其實已經無需爭辯, 人類未來的許多工作都是透過網路與數位運算達成, 既知趨勢如此, 每一位工程師就該越早起頭原本就該進行的重要工作, 透過計算機程式來解決問題, 構築一個值得長期投注心力的程式專案.","tags":"Misc","url":"./2018-Fall-32-bit-Windows.html"}]};