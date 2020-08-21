import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export const Create = () => {
  const [isloading, setIsloading] = useState(false);
  const [firstOption, setFirstOption] = useState("language");
  const handleClick = () => setIsloading(true);
  return (
    <>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control required type="text" placeholder="Enter Title" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="formGridCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control
              as="select"
              onChange={(e) => setFirstOption(e.target.value)}
            >
              <option value="language">language</option>
              <option value="ideas">ideas</option>
              <option value="news">news on tech</option>
              <option value="useful-sitemap">useful sitemap</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formGridSubCategory">
            <Form.Label>Sub-Category</Form.Label>
            <Form.Control as="select">
              {firstOption && firstOption === "language" && (
                <>
                  <option value="">Javascript</option>
                  <option value="">HTML5</option>
                  <option value="">CSS3</option>
                </>
              )}
              {firstOption && firstOption === "ideas" && (
                <>
                  <option value="">Business Idea</option>
                  <option value="">Application</option>
                  <option value="">Services</option>
                </>
              )}
              {firstOption && firstOption === "news" && (
                <>
                  <option value="">a</option>
                  <option value="">b</option>
                  <option value="">c</option>
                </>
              )}
              {firstOption && firstOption === "useful-sitemap" && (
                <>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </>
              )}
            </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="8" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              // @ts-ignore
              rows="10"
            />
          </Form.Group>
        </Form.Row>
      </Form>
      <Form.Row>
        <Form.Group as={Col} md="8" className="flex-row-reverse">
          <div className="text-right">
            <Button
              variant="primary"
              disabled={isloading}
              onClick={!isloading ? handleClick : null}
            >
              Submit
            </Button>{" "}
          </div>
        </Form.Group>
      </Form.Row>
    </>
  );
};
