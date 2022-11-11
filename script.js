// Navbar Item Close Button
let btnClose = document.getElementsByClassName("btn-close");
let navbarDropdown = document.getElementById("navbarDropdown");
for (let i = 0; i < btnClose.length; i++) {
  btnClose[i].addEventListener("click", (el) => {
    let a = el.target.parentElement.parentElement;
    a.classList.remove("show");
    a.previousElementSibling.classList.remove("show");
    a.previousElementSibling.setAttribute("aria-expanded", "false");
  });
}

// for (let i = 0; i < $(".btn-close").length; i++) {
//     $(this).click(function () {
//         $(this).parent().parent().removeClass("show");
//         $(this).parent().parent().prev().removeClass("show");
//     })
// }

// Navbar Height
document.documentElement.style.setProperty("--nav-height", document.getElementById("navbar").offsetHeight + "px");

// (JQuery)
// Sidebar Change
// projectName Edit Change
// Sortable
$(document).ready(() => {
  $("#searchForm").click(() => {
    $("#searchArea").focus();
  });

  $("#sidebarBtn, #sidebar2").click(() => {
    $("#sidebar").toggleClass("d-none");
    $("#sidebar2").toggleClass("d-none");
  });

  $("#sidebar3CloseButton").click(() => {
    console.log("aa");
    $("#sidebar3").addClass("d-none");
    $("#menuButton").removeClass("d-none");
  });

  $("#menuButton").click(() => {
    $("#menuButton").addClass("d-none");
    $("#sidebar3").removeClass("d-none");
  });

  $("html").click((e) => {
    if (e.target.id == "pN") {
      $("#pN").toggleClass("d-none");
      $("#pNEdit").toggleClass("d-none");
    }
    if (e.target.id != "pN" && e.target.id != "pNEdit") {
      $("#pN").removeClass("d-none");
      $("#pNEdit").addClass("d-none");
    }
  });

  $("#pNEdit").keypress((e) => {
    if (e.which == 13) {
      $("#pNEdit").toggleClass("d-none");
      $("#pN").toggleClass("d-none");
      $("#pN").text($("#pNEdit").val());
    }
  });

  $(".completedBtn").click(function () {
    let a = $(this).parent().parent().parent();
    a.children(".sortableMenu").addClass("d-none");
    a.children(".sortableAdd").removeClass("d-none");
    a.children(".sortableAdd").children("textarea").focus();
  });

  $(".sortableAddBtn").click(function () {
    let a = $(this).parent().siblings("textarea");
    $(this)
      .parent()
      .parent()
      .siblings(".sortableList")
      .append(
        `
      <div class="d-flex align-items-center bg-white rounded shadow-sm mb-2">
      <button type="button" class="btn text-start border-0 flex-fill" data-bs-toggle="modal"
          data-bs-target="#btn-` +
          b +
          `">` +
          a.val() +
          `</button>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-sm border-0 me-1 modalBtn" data-bs-toggle="modal"
          data-bs-target="#btn` +
          b +
          `">
          <i class="fa-solid fa-pen"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade modalMenu1" id="btn-` +
          b +
          `" tabindex="-1""
          aria-hidden="true">
          <div class="modal-dialog mx-auto w-50 modalDialog">
              <div class="modal-content" style="width: 768px;">
                  <div class="modal-body">
                      <button type="button"
                          class="btn btn-close position-absolute end-0 top-0 m-3"
                          data-bs-dismiss="modal"></button>
                      <div class="row mb-4">
                          <div class="col-8">
                              <div class="row align-items-center">
                                  <div class="col-2 text-center"><i
                                          class="fa-solid fa-tachograph-digital"></i></div>
                                  <div class="col-10"><span class="fs-4 fw-bold">` +
          a.val() +
          `</span>
                                  </div>
                              </div>
                          </div>
                          <div class="col-8">
                              <div class="row">
                                  <div class="col-10 offset-2">
                                      <a href="#" class="link-secondary">Tamamlandı</a>
                                      Listesinde
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-8">
                              <div class="row g-3">
                                  <div class="col-12">
                                      <div class="row">
                                          <div class="col-2 text-center"><i
                                                  class="fa-solid fa-align-justify"></i></div>
                                          <div class="col-10">Açıklama</div>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="row">
                                          <div class="col-10 offset-2">
                                              <textarea class="form-control shadow-none mb-2"
                                                  placeholder="Bu kart için başlık giriniz..."></textarea>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="row align-items-center">
                                          <div class="col-2 text-center"><i
                                                  class="fa-solid fa-align-justify"></i></div>
                                          <div class="col-auto">Etkinlik</div>
                                          <div class="col-auto ms-auto"><button
                                                  class="btn btn-sm btn-light shadow-none me-auto"
                                                  type="button">
                                                  Detayları Göster
                                              </button></div>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="row align-items-center">
                                          <div class="col-2 text-center">
                                              <img class="img-fluid rounded-circle"
                                                  src="https://via.placeholder.com/30x30/279472/FFFFFF"
                                                  style="height: 30px; width: 30px;">
                                          </div>
                                          <div class="col-10">
                                              <input class="form-control shadow-none"
                                                  type="text" placeholder="Yorum yaz...">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-4">
                              <div class="row g-1">
                                  <span class="text-secondary">Karta Ekle</span>
                                  <a class="btn btn-secondary shadow-none text-start" type="button">
                                      <i class="fa-solid fa-user"></i> Üyeler
                                  </a>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                      <i class="fa-solid fa-tag"></i> Etiketler
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-square-check"></i> Kontrol Listesi
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-regular fa-clock"></i> Tarihler
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-link"></i> Eklenti
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-credit-card"></i> Kapak
                                  </button>
                                  <button class="btn btn-secondary disabled shadow-none text-start"
                                      type="button">
                                      <i class="fa-regular fa-clock"></i> Özel Alanlar
                                  </button>
                                  <span class="text-muted pe-none">Kartlarınıza açılır
                                      listeler, metin alanları, tarihler ve daha fazlasını
                                      ekleyin.</span>
                                  <button id="modalFreeBtn" type="button"
                                      class="btn btn-sm btn-primary text-dark border-0">
                                      <i class="fa-solid fa-suitcase"></i>
                                      Ücretsiz Denemeyi Başlat
                                  </button>
                                  <span class="text secondary">Power-Up'lar</span>
                                  <button class="btn btn-light shadow-none text-start" type="button">
                                    <i class="fa-solid fa-plus"></i> Power-Up'lar Ekle
                                  </button>
                                  <div class="d-flex justify-content-between">
                                      <span class="text secondary">Otomasyon</span>
                                      


                                    <div class="dropdown">
                                        <a class="btn btn-sm border-0" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-start thirdDropMenu px-3"
                                            aria-labelledby="navbarDropdown" data-popper-placement="top-start">
                                            <div class="text-center fw-light">
                                                Butler Hakkında
                                                <button type="button"
                                                    class="btn-close shadow-none position-absolute end-0 px-3"
                                                    aria-label="Close"></button>
                                            </div>
                                            <hr class="dropdown-divider">
                                            <div class="border-0" role="group">
                                                <p>Butler, Trello panolarınıza otomasyon getirir. Panolarınızda farklı işlemler gerçekleştirmek için düğmeler ve kurallar oluşturun.</p>
                                                <p>Yeni Butler komutları eklemek veya mevcut komutları düzenlemek için dizine gidin.</p>
                                            </div>
                                                    <hr class="dropdown-divider">
                                            <div>
                                                <a href="#" class="btn btn-primary d-block">Butler dizinine git</a>
                                            </div>
                                            <div class="text-center mt-3">
                                                <a href="#" class="link-secondary">Bize geri bildirim verin</a>
                                            </div>
                                        </div>
                                    </div>


                                  </div>
                                  <button class="btn btn-light shadow-none text-start" type="button">
                                    <i class="fa-solid fa-plus"></i> Düğme Ekle
                                  </button>
                                  <span class="text-secondary">Hareketler</span>
                                  <a class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-arrow-right"></i> Taşı
                                  </a>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-copy"></i> Kopyala
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-clone"></i> Şablon Yap
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-eye"></i> Takip Et
                                  </button>
                                  <div>
                                      <hr class="my-1">
                                  </div>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-box-archive"></i> Arşiv
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-share-nodes"></i> Paylaş
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade modalMenu2" id="btn` +
          b +
          `" tabindex="-1"
          aria-hidden="true">
          <div class="modal-dialog position-absolute w-100 m-0">
              <div class="modal-content bg-transparent border-0">
                <button type="button" class="btn btn-secondary d-none closeModal" data-bs-dismiss="modal"></button>
                  <div class="row">
                      <div class="col"><textarea class="form-control shadow-none mb-2"
                              rows="4">` +
          a.val() +
          `</textarea>
                          <button class="btn btn-primary shadow-none me-auto modalAddBtn"
                              type="button">
                              Kaydet
                          </button>
                      </div>
                      <div class="col">
                          <div class="d-flex flex-column gap-1">
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-tachograph-digital"></i> Kartı Aç
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-tag"></i> Etiketleri Düzenle
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-user"></i> Üyeleri Değiştir
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-credit-card"></i> Kapağı Değiştir
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-arrow-right"></i> Taşı
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-tachograph-digital"></i> Kopyala
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-regular fa-clock"></i> Tarihleri Düzenle
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-box-archive"></i> Arşiv
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    `
      );
    a.val("");
    $(".sortableCloseBtn").click();

    $(".modalBtn").click(function () {
      let a = $(this).parent().offset().top;
      let b = $(this).parent().offset().left;
      $(this)
        .siblings(".modalMenu2")
        .children(".modal-dialog")
        .css({
          top: a + "px",
          left: b + "px",
          // "max-width": "520px",
        });
    });
    b++;
    $(".modalAddBtn").click(function () {
      let ab = $(this).parents(".modalMenu2");
      $(this).parents(".modalMenu2").siblings(".modalMenu1").find(".fw-bold").text($(this).siblings("textarea").val());
      $(".closeModal").click();
      ab.siblings("button").first().text($(this).siblings("textarea").val());
    });
  });

  $(".sortableCloseBtn").click(function () {
    let a = $(this).parent().parent();
    a.addClass("d-none");
    a.siblings(".sortableMenu").removeClass("d-none");
  });

  $(".modalBtn").click(function () {
    let a = $(this).parent().offset().top;
    let b = $(this).parent().offset().left;
    let c = $(this).parent().outerWidth();
    $(this)
      .siblings(".modalMenu2")
      .children(".modal-dialog")
      .css({
        top: a + "px",
        left: b + "px",
        // "max-width": "520px",
      })
      .find("textarea")
      .css({
        width: c + "px",
      });
  });

  diffListBtnEvent();

  // JQuery UI Sortable
  $("#sortable").sortable({
    start: (event, ui) => {
      ui.item.addClass("rotate");
      // $("body").addClass("overflow-hidden");
      $("#sortable").find(".dropdown-menu").removeClass("show");
    },
    stop: (event, ui) => {
      ui.item.removeClass("rotate");
      // $("body").removeClass("overflow-hidden");
    },
    scroll: false,
    tolerance: "pointer",
    revert: true,
    delay: 250,
    containment: "window",
    items: ".card",
    cancel: ".sortableMenu, .sortableAdd, .sortableList, .dropdown-menu, .board-header",
  });
  //   $("#sortable").disableSelection();
});

function diffListBtnEvent() {
  // Baska Liste Ekleyin Kısmı
  $("#addDiffList").click(function () {
    $("#addDiffList").addClass("d-none");
    $("#addDiffList2").removeClass("d-none");
  });

  $(".closeDiffList").click(function () {
    $("#addDiffList2").addClass("d-none");
    $("#addDiffList").removeClass("d-none");
  });

  $("#addDiffListBtn").click(function () {
    let a = $(this).parent().siblings("input");
    $(this)
      .parent()
      .parent()
      .parent()
      .before(
        `
      <div class="card px-3 py-1 ui-sortable-handle">
                        <div class="row align-items-center">
                            <div class="col fw-bold">` +
          a.val() +
          `</div>
                            <div class="col-2 text-center rounded p-2 infoArea">
                                <button class="btn btn-sm border-0 itemBtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-start firstDropMenu" aria-labelledby="navbarDropdown">
                                    <div class="text-center fw-light projectName">
                                        ` +
          a.val() +
          `
                                        <button type="button" class="btn-close shadow-none position-absolute end-0 px-3" aria-label="Close"></button>
                                    </div>
                                    <div class="px-3">
                                        <div>
                                            <hr class="dropdown-divider">
                                        </div>
                                    </div>
                                    <div class="list-group border-0" role="group">
                                        <a href="#" class="list-group-item list-group-item-action d-flex align-items-center border-0 rounded-0 text-dark">
                                            <div class="flex-fill px-2">Panoyu kapat...</div>
                                            <div><i class="fa-solid fa-angle-right"></i></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sortableList">
                        </div>
                        <div class="row align-items-center sortableMenu">
                            <div class="col infoArea rounded py-2">
                                <a href="#" class="d-block link-secondary text-decoration-none completedBtn">
                                    <i class="fa-solid fa-plus"></i>
                                    Kart Ekle
                                </a>
                            </div>
                            <div class="col-2 text-center rounded px-0 infoArea">
                                <div class="dropdown">
                                    <button class="btn border-0 text-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                        <i class="fa-solid fa-layer-group"></i>
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-start firstDropMenu" aria-labelledby="navbarDropdown" data-popper-placement="top-start" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(0px, -27.2px, 0px);">
                                        <div class="text-center fw-light">
                                            Takvim
                                            <button type="button" class="btn-close shadow-none position-absolute end-0 px-3" aria-label="Close"></button>
                                        </div>
                                        <div class="px-3">
                                            <div>
                                                <hr class="dropdown-divider">
                                            </div>
                                        </div>
                                        <div class="list-group border-0" role="group">
                                            <a href="#" class="list-group-item list-group-item-action d-flex align-items-center border-0 rounded-0 text-dark">
                                                <div><i class="fa-solid fa-trash"></i></div>
                                                <div class="flex-fill px-2">Görünümü Kaldır</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-none sortableAdd">
                            <textarea class="form-control shadow-none mb-2" placeholder="Bu kart için başlık giriniz..."></textarea>

                            <div class="d-flex align-items-center">
                                <button class="btn btn-primary shadow-none sortableAddBtn" type="button">
                                    Kaydet
                                </button>
                                <button type="button" class="btn-close shadow-none align-middle px-3 sortableCloseBtn" aria-label="Close"></button>

                                <button class="btn border-0 itemBtn ms-auto" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                                    <i class="fa-solid fa-ellipsis"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-start firstDropMenu" aria-labelledby="navbarDropdown">
                                    <div class="text-center fw-light">
                                        Ayarlar
                                        <button type="button" class="btn-close shadow-none position-absolute end-0 px-3" aria-label="Close"></button>
                                    </div>
                                    <div class="px-3">
                                        <hr>
                                    </div>
                                    <div class="list-group border-0" role="group">
                                        <a href="#" class="list-group-item list-group-item-action border-0 rounded-0 lgAction">Üyeler...</a>
                                        <a href="#" class="list-group-item list-group-item-action border-0 rounded-0 lgAction">Etiketler...</a>
                                        <a href="#" class="list-group-item list-group-item-action border-0 rounded-0 lgAction">Sıra...</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
      `
      );
    $(".closeDiffList").click();

    $(".completedBtn")
      .last()
      .click(function () {
        let a = $(this).parent().parent().parent();
        a.children(".sortableMenu").addClass("d-none");
        a.children(".sortableAdd").removeClass("d-none");
        a.children(".sortableAdd").children("textarea").focus();
      });
    sortableBtnEvent();
  });
}

// Dynamic Add Element In Sortable List
let b = 1;
function sortableBtnEvent() {
  $(".sortableAddBtn")
    .last()
    .click(function () {
      let a = $(this).parent().siblings("textarea");
      $(this)
        .parent()
        .parent()
        .siblings(".sortableList")
        .append(
          `
      <div class="d-flex align-items-center bg-white rounded shadow-sm mb-2">
      <button type="button" class="btn text-start border-0 flex-fill" data-bs-toggle="modal"
          data-bs-target="#btn-` +
            b +
            `">` +
            a.val() +
            `</button>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-sm border-0 me-1 modalBtn" data-bs-toggle="modal"
          data-bs-target="#btn` +
            b +
            `">
          <i class="fa-solid fa-pen"></i>
      </button>

      <!-- Modal -->
      <div class="modal fade modalMenu1" id="btn-` +
            b +
            `" tabindex="-1"
          aria-hidden="true">
          <div class="modal-dialog mx-auto w-50 modalDialog">
              <div class="modal-content" style="width: 768px;">
                  <div class="modal-body">
                      <button type="button"
                          class="btn btn-close position-absolute end-0 top-0 m-3"
                          data-bs-dismiss="modal"></button>
                      <div class="row mb-4">
                          <div class="col-8">
                              <div class="row align-items-center">
                                  <div class="col-2 text-center"><i
                                          class="fa-solid fa-tachograph-digital"></i></div>
                                  <div class="col-10"><span class="fs-4 fw-bold">` +
            a.val() +
            `</span>
                                  </div>
                              </div>
                          </div>
                          <div class="col-8">
                              <div class="row">
                                  <div class="col-10 offset-2">
                                      <a href="#" class="link-secondary">Tamamlandı</a>
                                      Listesinde
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-8">
                              <div class="row g-3">
                                  <div class="col-12">
                                      <div class="row">
                                          <div class="col-2 text-center"><i
                                                  class="fa-solid fa-align-justify"></i></div>
                                          <div class="col-10">Açıklama</div>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="row">
                                          <div class="col-10 offset-2">
                                              <textarea class="form-control shadow-none mb-2"
                                                  placeholder="Bu kart için başlık giriniz..."></textarea>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="row align-items-center">
                                          <div class="col-2 text-center"><i
                                                  class="fa-solid fa-align-justify"></i></div>
                                          <div class="col-auto">Etkinlik</div>
                                          <div class="col-auto ms-auto"><button
                                                  class="btn btn-sm btn-light shadow-none me-auto"
                                                  type="button">
                                                  Detayları Göster
                                              </button></div>
                                      </div>
                                  </div>
                                  <div class="col-12">
                                      <div class="row align-items-center">
                                          <div class="col-2 text-center">
                                              <img class="img-fluid rounded-circle"
                                                  src="https://via.placeholder.com/30x30/279472/FFFFFF"
                                                  style="height: 30px; width: 30px;">
                                          </div>
                                          <div class="col-10">
                                              <input class="form-control shadow-none"
                                                  type="text" placeholder="Yorum yaz...">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-4">
                              <div class="row g-1">
                                  <span class="text-secondary">Karta Ekle</span>
                                  <a class="btn btn-secondary shadow-none text-start" type="button">
                                      <i class="fa-solid fa-user"></i> Üyeler
                                  </a>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                      <i class="fa-solid fa-tag"></i> Etiketler
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-square-check"></i> Kontrol Listesi
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-regular fa-clock"></i> Tarihler
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-link"></i> Eklenti
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-credit-card"></i> Kapak
                                  </button>
                                  <button class="btn btn-secondary disabled shadow-none text-start"
                                      type="button">
                                      <i class="fa-regular fa-clock"></i> Özel Alanlar
                                  </button>
                                  <span class="text-muted pe-none">Kartlarınıza açılır
                                      listeler, metin alanları, tarihler ve daha fazlasını
                                      ekleyin.</span>
                                  <button id="modalFreeBtn" type="button"
                                      class="btn btn-sm btn-primary text-dark border-0">
                                      <i class="fa-solid fa-suitcase"></i>
                                      Ücretsiz Denemeyi Başlat
                                  </button>
                                  <span class="text secondary">Power-Up'lar</span>
                                  <button class="btn btn-light shadow-none text-start" type="button">
                                    <i class="fa-solid fa-plus"></i> Power-Up'lar Ekle
                                  </button>
                                  <div class="d-flex justify-content-between">
                                      <span class="text secondary">Otomasyon</span>
                                      


                                    <div class="dropdown">
                                        <a class="btn btn-sm border-0" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i class="fa-solid fa-ellipsis"></i>
                                        </a>
                                        <div class="dropdown-menu dropdown-menu-start thirdDropMenu px-3"
                                            aria-labelledby="navbarDropdown" data-popper-placement="top-start">
                                            <div class="text-center fw-light">
                                                Butler Hakkında
                                                <button type="button"
                                                    class="btn-close shadow-none position-absolute end-0 px-3"
                                                    aria-label="Close"></button>
                                            </div>
                                            <hr class="dropdown-divider">
                                            <div class="border-0" role="group">
                                                <p>Butler, Trello panolarınıza otomasyon getirir. Panolarınızda farklı işlemler gerçekleştirmek için düğmeler ve kurallar oluşturun.</p>
                                                <p>Yeni Butler komutları eklemek veya mevcut komutları düzenlemek için dizine gidin.</p>
                                            </div>
                                                    <hr class="dropdown-divider">
                                            <div>
                                                <a href="#" class="btn btn-primary d-block">Butler dizinine git</a>
                                            </div>
                                            <div class="text-center mt-3">
                                                <a href="#" class="link-secondary">Bize geri bildirim verin</a>
                                            </div>
                                        </div>
                                    </div>


                                  </div>
                                  <button class="btn btn-light shadow-none text-start" type="button">
                                    <i class="fa-solid fa-plus"></i> Düğme Ekle
                                  </button>
                                  <span class="text-secondary">Hareketler</span>
                                  <a class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-arrow-right"></i> Taşı
                                  </a>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-copy"></i> Kopyala
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-clone"></i> Şablon Yap
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-eye"></i> Takip Et
                                  </button>
                                  <div>
                                      <hr class="my-1">
                                  </div>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-box-archive"></i> Arşiv
                                  </button>
                                  <button class="btn btn-secondary shadow-none text-start" type="button">
                                    <i class="fa-solid fa-share-nodes"></i> Paylaş
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal fade modalMenu2" id="btn` +
            b +
            `" tabindex="-1"
          aria-hidden="true">
          <div class="modal-dialog position-absolute w-100 m-0">
              <div class="modal-content bg-transparent border-0">
                <button type="button" class="btn btn-secondary d-none closeModal" data-bs-dismiss="modal"></button>
                  <div class="row">
                      <div class="col"><textarea class="form-control shadow-none mb-2"
                              rows="4">` +
            a.val() +
            `</textarea>
                          <button class="btn btn-primary shadow-none me-auto modalAddBtn"
                              type="button">
                              Kaydet
                          </button>
                      </div>
                      <div class="col">
                          <div class="d-flex flex-column gap-1">
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-tachograph-digital"></i> Kartı Aç
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-tag"></i> Etiketleri Düzenle
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-user"></i> Üyeleri Değiştir
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-credit-card"></i> Kapağı Değiştir
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-arrow-right"></i> Taşı
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-tachograph-digital"></i> Kopyala
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-regular fa-clock"></i> Tarihleri Düzenle
                              </button>
                              <button class="btn btn-dark shadow-none modalInnerBtn me-auto"
                                  type="button">
                                  <i class="fa-solid fa-box-archive"></i> Arşiv
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>`
        );
      a.val("");
      $(this).siblings(".sortableCloseBtn").click();
      $(".closeDiffList").click();
      $(".modalBtn").click(function () {
        let a = $(this).parent().offset().top;
        let b = $(this).parent().offset().left;
        $(this)
          .siblings(".modalMenu2")
          .children(".modal-dialog")
          .css({
            top: a + "px",
            left: b + "px",
            // "max-width": "520px",
          });
      });
      b++;
      $(".modalAddBtn").click(function () {
        let ab = $(this).parents(".modalMenu2");
        $(this).parents(".modalMenu2").siblings(".modalMenu1").find(".fw-bold").text($(this).siblings("textarea").val());
        $(".closeModal").click();
        ab.siblings("button").first().text($(this).siblings("textarea").val());
      });
    });
  $(".sortableCloseBtn")
    .last()
    .click(function () {
      let a = $(this).parent().parent();
      a.addClass("d-none");
      a.siblings(".sortableMenu").removeClass("d-none");
    });
}
