import React from 'react';
import cx from 'clsx';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import FormLabel from '@material-ui/core/FormLabel';
import { ColumnToRow, Row, Item } from '@mui-treasury/components/flex';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import {
  EmailSubscribe,
  EmailTextInput,
  SubmitButton,
} from '@mui-treasury/components/EmailSubscribe';
import {
  SocialProvider,
  SocialLink,
} from '@mui-treasury/components/socialLink';

import { useMoonSocialLinkStyles } from '@mui-treasury/styles/socialLink/moon';
import { useBootstrapEmailSubscribeStyles } from '@mui-treasury/styles/emailSubscribe/bootstrap';
import { usePlainNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/plain';
import Logo from '../../assets/hedyla.png';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      style={{
        backgroundColor: '#13151D',
        marginTop: '400px',
      }}
      width="100%"
    >
      <Container>
        <Box pt={8} pb={2}>
          <Row wrap>
            <Item grow={2}>
              <Row alignItems="center">
                <Item color="#FFF" fontSize={64} lineHeight={0}>
                  <img
                    src={Logo}
                    alt="logo"
                    style={{
                      height: '45px',
                    }}
                  />
                </Item>
              </Row>
              <NavMenu className={classes.navMenu}>
                <NavItem
                  style={{
                    color: 'white',
                  }}
                >
                  Book a Demo
                </NavItem>
                <NavItem
                  style={{
                    color: 'white',
                  }}
                >
                  Careers
                </NavItem>
                <NavItem
                  style={{
                    color: 'white',
                  }}
                >
                  Blog
                </NavItem>
                <NavItem
                  style={{
                    color: 'white',
                  }}
                >
                  Company
                </NavItem>
                <NavItem
                  style={{
                    color: 'white',
                  }}
                >
                  Solutions
                </NavItem>
              </NavMenu>
            </Item>
            <Item grow maxWidth={500} mx="auto">
              <Box textAlign="center" mt={{ xs: 2, md: 0 }} my={2}>
                <SocialProvider useStyles={useMoonSocialLinkStyles}>
                  <SocialLink
                    style={{
                      color: 'white',
                    }}
                    brand="Twitter"
                    href="https://twitter.com/hedylalogistics"
                  />
                  <SocialLink
                    style={{
                      color: 'white',
                    }}
                    brand="LinkedIn"
                    href="https://www.linkedin.com/company/hedyla"
                  />
                </SocialProvider>
              </Box>
              <FormLabel
                style={{
                  color: 'white',
                }}
                htmlFor="newsletter"
                className={classes.newsletter}
              >
                Get the freshest news from us
              </FormLabel>
              <EmailSubscribe
                onSubmit={email => alert(`Your email is ${email}.`)}
                useStyles={useBootstrapEmailSubscribeStyles}
                inputClearedAfterSubmit
              >
                <EmailTextInput
                  id="newsletter"
                  placeholder="Enter your email"
                />
                <SubmitButton>Subscribe</SubmitButton>
              </EmailSubscribe>
            </Item>
          </Row>
        </Box>
        <Divider />
        <Box pt={2} pb={10}>
          <ColumnToRow
            at="md"
            columnStyle={{ alignItems: 'center' }}
            rowStyle={{ alignItems: 'unset' }}
          >
            <Item grow ml={-2} shrink={0}>
              <NavMenu useStyles={usePlainNavigationMenuStyles}>
                <ColumnToRow at="sm">
                  <NavItem
                    style={{
                      color: 'white',
                    }}
                    className={cx(classes.legalLink)}
                  >
                    Terms & Conditions
                  </NavItem>
                  <NavItem
                    style={{
                      color: 'white',
                    }}
                    className={cx(classes.legalLink)}
                  >
                    Privacy Policy
                  </NavItem>
                  <NavItem
                    style={{
                      color: 'white',
                    }}
                    className={cx(classes.legalLink)}
                  >
                    Accessibility
                  </NavItem>
                  <NavItem
                    style={{
                      color: 'white',
                    }}
                    className={cx(classes.legalLink)}
                  >
                    Legal
                  </NavItem>
                </ColumnToRow>
              </NavMenu>
            </Item>
          </ColumnToRow>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
