import styled from "styled-components";
import { ReactComponent as PhoneIconLink } from "../SvgIcons/phone.svg";
import { ReactComponent as MailIconLink } from "../SvgIcons/mail.svg";
import { ReactComponent as PinIconLink } from "../SvgIcons/pin.svg";
import { ReactComponent as BookingIconLink } from "../SvgIcons/booking.svg";
import { ReactComponent as StatuteIconLink } from "../SvgIcons/statute.svg";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0px 40px;
    padding-bottom: 40px;

        @media (max-width: 767px) {
        padding: 0px 20px;
}
`;

export const Header = styled.h2`
    font-size: 48px;
    text-align: center;
    
    @media (max-width: 767px) {
font-size: 32px;
}
`;

export const SubHeader = styled.h3`
    font-size: 24px;
    text-align: left;
    
        @media (max-width: 767px) {
        font-size: 18px;
}
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: justify;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    border: 0;

    thead {
      display: none;
    }

    tbody {
      display: block;
    }
  }
`;

export const TableHeader = styled.th`
  padding: 16px;
  background-color:#93A981;
  font-size: 1.6rem;
  color: white;
`;

export const TableRow = styled.tr`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 20px;
    border: 2px solid rgb(241, 241, 241);
    border-radius: 10px;
    padding: 10px;
    font-size: 16px;
    box-shadow: 0 0 20px rgba(0,0,0,0.1);
  }
`;

export const TableCell = styled.td`
  padding: 16px;
  text-align: center;

    svg {
    width: 40px;
    height: 40px;
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    display: block;
    text-align: right;
    position: relative;
    padding-left: 50%;

        svg {
      width: 40px;
      height: 40px;
    }

    &::before {
      content: attr(data-label);
      position: absolute;
      left: 16px;
      width: 45%;
      text-align: left;
      font-weight: bold;
      white-space: nowrap;
    }

      &[data-label="Ikona"] {
        text-align: center;
        padding-left: 0;

        &::before {
          content: none;
      }
    }

      &[data-label="brak"] {
        display: none;

        &::before {
          content: none;
      }
    }
    }
`;
export const ContactSection = styled.address`
    font-style: normal;
    display: flex;
    flex-direction: column;
`;

export const Info = styled.div`
  font-size: 18px;
  line-height: 1.5;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 40px 0;
  gap: 40px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap:30px;
    padding: 20px 0;
  }
`;

export const ContactInfo = styled.div`
    font-size: 18px;
    font-weight: 400;
    max-width: 670px;
    line-height: 1.4;

    @media (max-width: 767px) {
    font-size: 16px;
}
`;

export const LinkWrapper = styled.div`
    margin: 12px 0;
    margin-bottom: 0;
`;

export const AddressLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s;
    color: #93A981;

    &:hover {
        color: #252525;
    }

    @media (max-width: 767px) {
    font-size: 17px;
}
`;

export const PhoneIcon = styled(PhoneIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

        @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
`;

export const MailIcon = styled(MailIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

        @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
  `;

export const PinIcon = styled(PinIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

      @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
`;

export const BookingIcon = styled(BookingIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

      @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
`;

export const StatuteIcon = styled(StatuteIconLink)`
    width: 24px;
    height: 24px;
    transition: color 0.3s;

      @media (max-width: 767px) {
          width: 17px;
          height: 17px;
}
`;

export const CruiseWrapper = styled.div`
  text-align: left;
        @media (max-width: 767px) {
        text-align: center;
  }
`;
export const CruiseSubHeader = styled.h3`
    font-size: 30px;
    text-align: center;
    
        @media (max-width: 767px) {
        font-size: 18px;
        margin: 25px 0;
}
`;

export const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 25px 0;
      @media (max-width: 767px) {
        font-size: 16px;
  }
`;

export const StyledList = styled.ul`
text-align: left;
  list-style: disc;
  font-size: 18px;
  line-height: 1.5;
    @media (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ListItem = styled.li`
  margin-bottom: 5px;
`;

export const BoldText = styled.span`
  font-weight: bold;
`;
export const SocialLink = styled.a`

    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s;
    color: #93A981;

    &:hover {
        color: #252525;
    }
 `;

export const ButtonDiv = styled.div`
  text-align: center;
  margin-top: 20px;

        @media (min-width: 768px) {
        display: none;
        }
`;

export const ShowMoreButton = styled.button`
  display: none;
  background: white;
  color: black;
  padding: 30px 40px;
  font-size: 23px;
  font-weight: bold;
  border: 2px solid rgb(240, 240, 240);
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);

    &:hover {
        border-color: rgba(3, 102, 214, 0.2);
        color: rgb(68, 68, 68);
    }

      @media (max-width: 768px) {
        display: inline-block;
        padding: 20px;
        font-size: 22px;
    }
`;

export const ShowMoreContent = styled.div`
  @media (max-width: 768px) {
    display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
  }
`;