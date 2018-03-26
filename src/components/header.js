import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';

class PostsHeader extends Component {
  render() {
      return (
        <Navbar inverse defaultExpanded>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="#home">Ploki</a>
              </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Navbar.Form>
                <FormGroup>
                  <FormControl type="text" placeholder="Search" />
                </FormGroup>{' '}
                <Button bsStyle="primary" type="submit">Submit</Button>
              </Navbar.Form>
            </Navbar.Collapse>
         </Navbar>
      );
  }
}
export default PostsHeader;
