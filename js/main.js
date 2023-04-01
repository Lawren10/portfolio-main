!(function (e) {
  "use strict";
  e(function () {
    e(document).on(
      "click",
      "[data-lightbox]",
      lity.options(
        "template",
        '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><div class="lity-close" data-lity-close aria-label="Close (Press escape to close)"><span class="btn-line"></span></div></div></div></div>'
      )
    ),
      e('.navbar .navbar-nav .nav-link[href^="#"]').each(function () {
        e(this).animatedModal({
          animatedIn: "fadeIn",
          animatedOut: "fadeOut",
          animationDuration: "0s",
          beforeOpen: function () {
            e("#overlay-effect")
              .addClass("animate-up")
              .removeClass("animate-down"),
              e("#" + this.modalTarget).css({
                animationDelay: ".5s",
                animationFillMode: "both",
              });
          },
          afterOpen: function () {
            e("#" + this.modalTarget).css({
              animationFillMode: "none",
            });
          },
          beforeClose: function () {
            e("#overlay-effect")
              .addClass("animate-down")
              .removeClass("animate-up"),
              e("#" + this.modalTarget).css({
                animationDelay: ".5s",
                animationFillMode: "both",
              });
          },
          afterClose: function () {
            e("#" + this.modalTarget).css({
              animationFillMode: "none",
            });
          },
        });
      }),
      e(".lightbox-wrapper").each(function () {
        e('.navbar .navbar-nav .nav-link[href^="#' + this.id + '"]').length ||
          e(this).hide();
      }),
      e(document).on("mouseup", function (a) {
        if (e(".navbar #navbarSupportedContent").hasClass("show")) {
          var t = e(".navbar .navbar-menu");
          t.is(a.target) || 0 !== t.has(a.target).length || t.trigger("click");
        }
      }),
      (function () {
        var a,
          t,
          i = 2500,
          s = 660,
          o = 1500;
        function n(e) {
          var a = (function (e) {
            return e.is(":last-child") ? e.parent().children().eq(0) : e.next();
          })(e);
          e.parents(".cd-headline").hasClass("clip") &&
            e.parents(".cd-words-wrapper").animate(
              {
                width: "2px",
              },
              s,
              function () {
                var t;
                (t = a),
                  e.removeClass("is-visible").addClass("is-hidden"),
                  t.removeClass("is-hidden").addClass("is-visible"),
                  (function (e, a) {
                    e.parents(".cd-headline").hasClass("clip") &&
                      e.parents(".cd-words-wrapper").animate(
                        {
                          width: e.width() + 10,
                        },
                        s,
                        function () {
                          setTimeout(function () {
                            n(e);
                          }, o);
                        }
                      );
                  })(a);
              }
            );
        }
        (a = e(".cd-headline")),
          (t = i),
          a.each(function () {
            var a = e(this);
            if (a.hasClass("clip")) {
              var i = a.find(".cd-words-wrapper"),
                s = i.width() + 10;
              i.css("width", s);
            }
            setTimeout(function () {
              n(a.find(".is-visible").eq(0));
            }, t);
          });
      })(),
      e(".home-area").hasClass("video-variant") && e("#homeVideo").YTPlayer();
    var a, t, i;
    // tns({
    //   container: "#about .testimonials-section .my-slider",
    //   items: 2,
    //   gutter: 30,
    //   responsive: {
    //     0: {
    //       items: 1,
    //       gutter: 0,
    //     },
    //     768: {
    //       items: 2,
    //       gutter: 30,
    //     },
    //   },
    //   preventScrollOnTouch: "auto",
    //   slideBy: "page",
    //   mouseDrag: !0,
    //   swipeAngle: !1,
    //   speed: 400,
    //   controls: !1,
    //   autoHeight: !0,
    //   navPosition: "bottom",
    // });
    (a = function () {
      e("#resume .skills-section .single-skill").each(function () {
        var a = Math.min(100, Math.max(0, e(this).data("percentage"))),
          t = e(this).find(".skill-progress").outerWidth(!0),
          i = t - t * (a / 100);
        e(this)
          .find(".skill-percentage")
          .text(a + "%")
          .css("margin-right", i),
          e(this)
            .find(".progress-bar")
            .attr("aria-valuenow", a)
            .css("width", a + "%");
      });
    })(),
      e(window).on("resize", function () {
        a();
      }),
      (t = e("#portfolio .portfolio-section .portfolio-grid")),
      (i = e("#portfolio .portfolio-section .filter-control li")),
      t.imagesLoaded(function () {
        t.isotope({
          itemSelector: "#portfolio .portfolio-section .single-item",
        }),
          i.on("click", function () {
            i.removeClass("tab-active"), e(this).addClass("tab-active");
            var a = e(this).data("filter");
            t.isotope({
              filter: a,
              transitionDuration: ".25s",
            });
          });
      }),
      e("#contact .contact-section .contact-form").on("submit", function (a) {
        // var t = e(this),
        //   i = t.find("#contact-submit"),
        //   s = i.text(),
        //   o = t.find(".contact-feedback");
        // a.preventDefault(),
        //   i.html("Wait...").addClass("wait").prop("disabled", !0),
        //   setTimeout(function () {
        //     e.ajax({
        //       url: t.attr("action"),
        //       type: "POST",
        //       data: t.serialize(),
        //     }).done(function (e) {
        //       "success" == e
        //         ? (i.removeClass("wait").html("Success").addClass("success"),
        //           o
        //             .addClass("success")
        //             .html("Thank you for your message. It has been sent.")
        //             .fadeIn(200),
        //           setTimeout(function () {
        //             i.html(s).removeClass("success").prop("disabled", !1),
        //               o.fadeOut(200).removeClass("success").html("");
        //           }, 6e3),
        //           t[0].reset())
        //         : (console.log(e),
        //           i.removeClass("wait").html("Error").addClass("error"),
        //           o
        //             .addClass("error")
        //             .html(
        //               "Server error! Please check your browser console log for more details."
        //             )
        //             .fadeIn(200),
        //           setTimeout(function () {
        //             i.html(s).removeClass("error").prop("disabled", !1),
        //               o.fadeOut(200).removeClass("error").html("");
        //           }, 6e3));
        //     });
        //   }, 1e3);
      });

    e("#contact-submit").on("click", function (event) {
      event.preventDefault();
      var contactName = e("#contact-name").val();
      var contactEmail = e("#contact-email").val();
      var message = e("#contact-message").val();
      var message_encode = `https://wa.me/+2347046220065?text=Hi my name is ${contactName},Email:${contactEmail}, ${message}`;

      console.log(contactName, contactEmail, message);

      if (contactName === "" || contactEmail === "" || message === "") {
        e(".contact-feedback")
          .addClass("error")
          .html("sorry make sure all fields are filled and try again")
          .fadeIn(200);
        setTimeout(function () {
          e(".contact-feedback").fadeOut(200).removeClass("error").html("");
        }, 5000);
        return;
      }

      var sendelement = document.createElement("a");
      sendelement.href = message_encode;
      sendelement.setAttribute("target", "_blank");
      sendelement.click();
    });
  }),
    e(window).on("load", function () {
      e(".preloader-icon").fadeOut(400),
        e(".preloader").delay(500).fadeOut("slow");
    });
})(jQuery);
