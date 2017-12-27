// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,Image,CodePane
} from 'spectacle';
import CodeSlide from 'spectacle-code-slide';
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="primary">
        
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Test Driven Development
          </Heading>
          <Image src="https://tedvinke.files.wordpress.com/2016/06/tdd.png?w=1100"/>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
          all code are guilty until proven innocent
          </Text>          
        </Slide>     
        <Slide transition={['fade']} bgColor="#2196F3">
          <Heading size={6} textColor="primary" caps>
            Agenda
          </Heading>
          <List>
          <Text size={6} textColor="primary">
          Khái niệm về TDD 
          </Text>
          <Text size={6} textColor="primary">
          Lợi ích của TDD
          </Text>
          <Text size={6} textColor="primary">
          Các lỗi thường gặp khi áp dụng TDD
          </Text>
          <Text size={6} textColor="primary">
          Các kĩ thuật cơ bản để viết test
          </Text>
          </List>
        </Slide>
        <Slide transition={['zoom']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="#3F51B5" >
          Khái niệm về TDD 
          </Heading>
          <BlockQuote><Cite textColor="#455A64">
          TDD là viết test trước khi viết code cho chức năng cần phát triển theo từng babysteps
          </Cite></BlockQuote>
          <Image src="http://www.filecatalyst.com/wp-content/uploads/tdd.png"/>
        </Slide>
        <Slide transition={['fade']} bgColor="#C8DBDA" textColor="primary">
        <Heading size={6} textColor="#795548" >
         Lợi ích của TDD
          </Heading>
          <br></br>
          <Image
          style= "width= 730px;
          height: 460px;"
          src='http://sv1.upsieutoc.com/2017/12/27/tdd1.png'/>
        </Slide>
        <Slide transition={['slide']} bgColor="primary" textColor="secondary">
        <Heading size={6} textColor="#795548" >
         Lợi ích của TDD
          </Heading>
          <br></br>
          <Image
          style="  width: 730px;
          height: 460px;"
          src='http://blog.hello2morrow.com/wp-content/uploads/2015/04/concepts.gif'/>
        </Slide>
        <Slide transition={['slide']} bgColor="tertiary" textColor="secondary">
        <Heading size={6} textColor="primary" >
         Lợi ích của TDD
          </Heading>
          <br></br>
          <Image
          style="  width: 730px;
          height: 460px;"
          src='http://sv1.upsieutoc.com/2017/12/27/documents-158461_1280.png'/>
        </Slide>
        <Slide transition={['fade']} bgColor="#B2B0A4" textColor="secondary">
        <Heading size={6} textColor="secondary" >
         Lợi ích của TDD
          </Heading>
          <br></br>
          <Image style="  width: 730px;
                          height: 460px;"
                          
           src='https://merovee.files.wordpress.com/2012/10/guilty2.jpg'/>
        </Slide>

        <Slide transition={['zoom']} bgColor="#607D8B" textColor="secondary">        
          
          <Heading size={3} textColor="primary">Bài toán FizzBuzz</Heading>
          <Text><List>
            Write a program that receive an integer from   1   to   100 . Then return<br></br>
            But:
            
          <ListItem textColor="primary">for multiples of three,   return   Fizz     (instead of the number)</ListItem>
          <ListItem textColor="primary">for multiples of five,   return   Buzz     (instead of the number)</ListItem>
          <ListItem textColor="primary">for multiples of both three and five,   return   FizzBuzz     (instead of the number)</ListItem>
        </List></Text>
          
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="secondary">   
          
          <Heading size={6} textColor="secondary">Các lỗi thường gặp khi áp dụng TDD</Heading>
          <Text><List>
            Bỏ qua việc thiết kế tổng quan chức năng trước khi bắt đầu
          <Image 
          style="  width: 730px;
          height: 460px;"
          src="https://www.petsworld.in/blog/wp-content/uploads/2017/01/Pic-1-3.jpg"/>          
        </List></Text>          
        </Slide>

        <Slide transition={['fade']} bgColor="#FEFBDC" textColor="secondary">   
          
          <Heading size={6} textColor="secondary">Các lỗi thường gặp khi áp dụng TDD</Heading>
          <Text><List>
            Không tuân thủ nguyên tắc babystep
          <Image
                    style="  width: 730px;
                    height: 460px;"
          src="http://wwwcdn.scriptmag.com/wp-content/uploads/Cart-Before-the-Horse-e1472651603119.jpg"/>          
        </List></Text>          
        </Slide>
        <Slide transition={['fade']} bgColor="#455A64" textColor="primary">   
          
          <Heading size={6} textColor="primary">Các lỗi thường gặp khi áp dụng TDD</Heading>
          <Text textColor="primary"><List>
          Không refactor / refactor quá nhiều
          <Image
                    style="  width: 730px;
                    height: 460px;"
          src="https://pbs.twimg.com/media/Cgbwn10UsAAS8s4.jpg"/>          
        </List></Text>          
        </Slide>

        <Slide transition={['fade']} bgColor="#455A64" textColor="secondary">   
          
        <Heading size={6} textColor="primary">Các lỗi thường gặp khi áp dụng TDD</Heading>
        <Text textColor="primary"><List>
          Viết test, đặt tên khó hiểu
          <Image
                    style="  width: 730px;
                    height: 460px;"
          src="http://www.betterthanpants.com/media/catalog/product/i/-/i-want-you-to-speak-english-bs-base_1.png"/>          
        </List></Text>          
        </Slide>
        <Slide transition={['fade']} bgColor="#D1D8AC" textColor="secondary">   
          
          <Heading size={6} textColor="secondary">Các lỗi thường gặp khi áp dụng TDD</Heading>
          <Text><List>
          Tests không được thiết kế để reuse
          <Image
                    style="  width: 730px;
                    height: 460px;"
          src="https://www.wikihow.com/images/thumb/9/95/Reuse-Empty-Water-Bottles-Step-2-Version-2.jpg/aid855151-v4-728px-Reuse-Empty-Water-Bottles-Step-2-Version-2.jpg"/>          
        </List></Text>          
        </Slide>

        <Slide transition={['fade']} bgColor="#455A64" textColor="secondary">   
          
        <Heading size={6} textColor="primary">Các kĩ thuật cơ bản để viết test</Heading>
        <Text textColor="primary"><List>
          Boundary testing
          <Image
                    style="  width: 730px;
                    height: 460px;"
          src="http://www.softwaretestinggenius.com/photos/1177.jpg"/>          
        </List></Text>          
        </Slide>
        <Slide transition={['fade']} bgColor="#3949AB" textColor="secondary">   
          
          <Heading size={6} textColor="primary">Các kĩ thuật cơ bản để viết test</Heading>
          <Text textColor="primary"><List>
          Test coverage
          <Image
                    style="  width: 730px;
                    height: 460px;"
          src="http://www.testingbrain.com/wp-content/uploads/2011/07/branch-coverage-testing.jpg"/>          
        </List></Text>          
        </Slide>
        <Slide transition={['fade']} bgColor="#5D4037" textColor="secondary">   
          
          <Heading size={6} textColor="primary">Các kĩ thuật cơ bản để viết test</Heading>
          <Text textColor="primary"><List>
          Test doubles
          <Image
                    style="  width: 730px;
                    height: 460px;"
          src="https://www.logicroom.co/5-javascript-test-doubles-you-should-know-about/images/1_image.png"/>          
        </List></Text>          
        </Slide>
        <Slide transition={['fade']} bgColor="#999999" textColor="primary">   
          
          <Heading size={6} textColor="primary">Summary</Heading>
        <List>
        <ListItem>TDD là phương pháp phân tích, thiết kế chức năng cần phát triển thông qua kiểm thử.
        </ListItem> 
        <ListItem>Concept của TDD là viết test fail -> run test -> viết code -> run test -> refactor -> viết test -> …  theo từng bước nhỏ cho tới khi không thể nghĩ thêm test nữa
        </ListItem>
        <ListItem>TDD đảm bảo developer viết code sát với yêu cầu nhất, cover được tối đa số lỗi có thể phát sinh
        </ListItem>
        <ListItem>TDD tiết kiệm tối đa thời gian phát triển phần mềm
        </ListItem>      

        </List>   
        </Slide>
        <Slide transition={['zoom']} bgColor="#283593" textColor="secondary">   
          
          <BlockQuote>
            <Quote  textColor="primary">We are what we repeatedly do. Excellence, then, is not an act, but a habit.</Quote>
            </BlockQuote>        
        </Slide>
      </Deck>
    );
  }
}
