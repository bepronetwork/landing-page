import { Container, Nav, Navbar } from "react-bootstrap";
import Part1Taikai from "../assets/icons/part1-taikai-icon";
import Part2Taikai from "../assets/icons/part2-taikai-icon";
import Part3Taikai from "../assets/icons/part3-taikai-icon";
import Part4Taikai from "../assets/icons/part4-taikai-icon";
import Part5Taikai from "../assets/icons/part5-taikai-icon";
import Part6Taikai from "../assets/icons/part6-taikai-icon";
import Part7Taikai from "../assets/icons/part7-taikai-icon";
import Part8Taikai from "../assets/icons/part8-taikai-icon";
import Part9Taikai from "../assets/icons/part9-taikai-icon";
import Part10Taikai from "../assets/icons/part10-taikai-icon";
import Part11Taikai from "../assets/icons/part11-taikai-icon";
import ExternalSimpleArrowIcon from "../assets/icons/external-simpleArrow-icon";
import Link from "next/link";

export default function MainNavTaikai() {
  return (
    <>
      <Navbar className="nav-taikai bg-taikai">
        <Container className="d-flex justify-content-center text-center">
          <Part1Taikai
            className="taikai-icon position-absolute"
            style={{ top: `0`, right: `96.42%` }}
          />
          <Part2Taikai
            className="taikai-icon position-absolute"
            style={{ top: `0`, right: `91.41%` }}
          />
          <Part3Taikai
            className="taikai-icon position-absolute"
            style={{ bottom: `0`, right: `86.76%` }}
          />
          <Part4Taikai
            className="taikai-icon position-absolute"
            style={{ right: `82.63%` }}
          />
          <Part5Taikai
            className="taikai-icon position-absolute"
            style={{ top: `20%`, right: `76.6%` }}
          />
          <Part6Taikai
            className="taikai-icon position-absolute"
            style={{ bottom: `0`, right: `71.22%` }}
          />
          <Link href="/">
            <a target="_blank">
              <div className="d-flex justify-content-center text-center">
                <span className="caption text-uppercase text-white">
                  Bepro is now part of TAIKAI! learn more <u>here</u>
                  <ExternalSimpleArrowIcon
                    className="ms-1 mb-3"
                    width={9}
                    height={9}
                  />
                </span>
              </div>
            </a>
          </Link>
          <Part7Taikai
            className="taikai-icon position-absolute"
            style={{ bottom: `0`, right: `27.59%` }}
          />
          <Part8Taikai
            className="taikai-icon position-absolute"
            style={{ top: `9.3%`, right: `20.31%` }}
          />
          <Part9Taikai
            className="taikai-icon position-absolute"
            style={{ top: `44.19%`, right: `14.48%` }}
          />
          <Part10Taikai
            className="taikai-icon position-absolute"
            style={{ bottom: `0`, right: `8.23%` }}
          />
          <Part11Taikai
            className="taikai-icon position-absolute"
            style={{ bottom: `0`, right: `1.83%` }}
          />
        </Container>
      </Navbar>
    </>
  );
}
