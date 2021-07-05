import React from "react";
import "./TargetCard.css";
import { Button } from "react-bootstrap";

function TargetCard() {
  return (
    <div>
      <div class="Box-xbwvo8-0 dkkimO Offer__SectionStyled-sc-1r2j1jk-0 guuFEz">
        <div class="container">
          <div class="Box-xbwvo8-0 Offer__OfferWrapper-sc-1r2j1jk-1 eVvLWs">
            <div class="d-flex flex-wrap">
              <div class="widget-image">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  class="img-fluid"
                />
              </div>
              <div class="pt-3 pl-5">
                <h4
                  color="light"
                  font-size="24px"
                  class="Title__CardTitle-ny8obq-2 bMJJPf"
                >
                  Get a free chapter of this book
                </h4>
                <p
                  color="lightShade"
                  font-size="18px"
                  class="Text__Paragraph-vn8kw8-0 ivZwsh"
                >
                  Create custom landing pages with Omega that converts more
                  visitors than any website.
                </p>
              </div>
              <div class="Box-xbwvo8-0 Offer__BtnContainer-sc-1r2j1jk-2 cHtlfd">
                <Button variant="danger">Get a free Chapter</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TargetCard;
