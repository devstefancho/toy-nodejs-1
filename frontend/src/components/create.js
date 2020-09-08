import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

export const Create = () => {
  const [isloading, setIsloading] = useState(false);
  const [title, setTitle] = useState("");
  const [firstOption, setFirstOption] = useState("language");
  const [secondOption, setSecondOption] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    console.log("=================");
    console.log(title);
    console.log(firstOption);
    console.log(secondOption);
    console.log(description);
  }, [title, firstOption, secondOption, description]);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangeFirstOption = (e) => {
    setFirstOption(e.target.value);
  };

  const onChangeSecondOption = (e) => {
    setSecondOption(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleClick = () => setIsloading(true);
  return (
    <>
      <Form>
        {/*title input*/}
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="formGridTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter Title"
              onChange={onChangeTitle}
            />
          </Form.Group>
        </Form.Row>
        {/*firstOption and secondOption selection*/}
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="formGridFirstOption">
            <Form.Label>First Category</Form.Label>
            <Form.Control as="select" onChange={onChangeFirstOption}>
              <option value="language">Language</option>
              <option value="idea">Idea</option>
              <option value="book">Book</option>
              <option value="bookmark">Bookmark Link</option>
            </Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formGridSecondOption">
            <Form.Label>Second Category</Form.Label>
            {firstOption && firstOption === "language" && (
              <Form.Control as="select" onChange={onChangeSecondOption}>
                <option value="" selected="selected" disabled>
                  select one...
                </option>
                <option value="language-javascript">Javascript</option>
                <option value="language-html5">HTML5</option>
                <option value="language-css3">CSS3</option>
              </Form.Control>
            )}
            {firstOption && firstOption === "idea" && (
              <Form.Control as="select" onChange={onChangeSecondOption}>
                <option value="" selected="selected" disabled>
                  select one...
                </option>
                <option value="idea-business ">Business Idea</option>
                <option value="idea-application">Application</option>
                <option value="idea-service">Services</option>
              </Form.Control>
            )}
            {firstOption && firstOption === "book" && (
              <Form.Control as="select" onChange={onChangeSecondOption}>
                <option value="" selected="selected" disabled>
                  select one...
                </option>
                <option value="book-list">book list</option>
                <option value="book-quotes">inspirational quotes</option>
                <option value="book-misc">Misc</option>
              </Form.Control>
            )}
            {firstOption && firstOption === "bookmark" && (
              <Form.Control as="select" onChange={onChangeSecondOption}>
                <option value="" selected="selected" disabled>
                  select one...
                </option>
                <option value="bookmark-youtube">Youtube</option>
                <option value="bookmark-article">Article</option>
                <option value="bookmark-misc">Misc</option>
              </Form.Control>
            )}
          </Form.Group>
        </Form.Row>
        {/*description(text-area)*/}
        <Form.Row>
          <Form.Group as={Col} md="8" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              // @ts-ignore
              rows="10"
              onChange={onChangeDescription}
            />
          </Form.Group>
        </Form.Row>
        {/*submit button*/}
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
      </Form>
    </>
  );
};
