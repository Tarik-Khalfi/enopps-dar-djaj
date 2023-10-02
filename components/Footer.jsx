import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="lg:container  space-y-20 py-10 px-10">
      <div className="lg:container xl:grid xl:grid-cols-12 py-10 flex flex-col items-start">
        <div className=" col-span-6 space-y-7">
          <Image src="/logo.png" alt="logo" width={70} height={70} />
          <p className="w-[360px] leading-9 font-poppins text-[#A1A1A1]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Sed ut perspiciatis unde omnis iste{" "}
          </p>
          <ul className="flex items-center">
            {/* <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M89.9982 7.221C88.468 7.221 87.2193 8.46976 87.2193 9.99996C87.2193 11.5302 88.468 12.7789 89.9982 12.7789C91.5284 12.7789 92.7772 11.5302 92.7772 9.99996C92.7772 8.46976 91.5284 7.221 89.9982 7.221ZM98.333 9.99996C98.333 8.84918 98.3435 7.70883 98.2788 6.56013C98.2142 5.2259 97.9098 4.04177 96.9342 3.06611C95.9564 2.08836 94.7744 1.78608 93.4401 1.72145C92.2894 1.65682 91.149 1.66725 90.0003 1.66725C88.8495 1.66725 87.7092 1.65682 86.5605 1.72145C85.2263 1.78608 84.0421 2.09045 83.0665 3.06611C82.0887 4.04385 81.7864 5.2259 81.7218 6.56013C81.6572 7.71091 81.6676 8.85127 81.6676 9.99996C81.6676 11.1487 81.6572 12.2911 81.7218 13.4398C81.7864 14.774 82.0908 15.9581 83.0665 16.9338C84.0442 17.9116 85.2263 18.2138 86.5605 18.2785C87.7113 18.3431 88.8516 18.3327 90.0003 18.3327C91.1511 18.3327 92.2915 18.3431 93.4401 18.2785C94.7744 18.2138 95.9585 17.9095 96.9342 16.9338C97.9119 15.9561 98.2142 14.774 98.2788 13.4398C98.3455 12.2911 98.333 11.1507 98.333 9.99996ZM89.9982 14.2758C87.6321 14.2758 85.7224 12.3661 85.7224 9.99996C85.7224 7.63378 87.6321 5.72415 89.9982 5.72415C92.3644 5.72415 94.274 7.63378 94.274 9.99996C94.274 12.3661 92.3644 14.2758 89.9982 14.2758ZM94.4492 6.54763C93.8967 6.54763 93.4506 6.10149 93.4506 5.54903C93.4506 4.99658 93.8967 4.55044 94.4492 4.55044C95.0016 4.55044 95.4478 4.99658 95.4478 5.54903C95.4479 5.68022 95.4222 5.81014 95.3721 5.93137C95.322 6.0526 95.2484 6.16275 95.1556 6.25551C95.0629 6.34827 94.9527 6.42182 94.8315 6.47195C94.7103 6.52207 94.5803 6.54779 94.4492 6.54763Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    < path d="M57.667 1.66663H42.3337C41.9649 1.66663 41.667 1.96454 41.667 2.33329V17.6666C41.667 18.0354 41.9649 18.3333 42.3337 18.3333H57.667C58.0357 18.3333 58.3337 18.0354 58.3337 17.6666V2.33329C58.3337 1.96454 58.0357 1.66663 57.667 1.66663ZM54.4857 7.70204C54.492 7.79996 54.492 7.90204 54.492 8.00204C54.492 11.0604 52.1628 14.5833 47.9066 14.5833C46.5941 14.5833 45.3774 14.202 44.3524 13.5458C44.5399 13.5666 44.7191 13.575 44.9107 13.575C45.9941 13.575 46.9899 13.2083 47.7837 12.5875C46.767 12.5666 45.9128 11.9 45.6212 10.9833C45.9774 11.0354 46.2982 11.0354 46.6649 10.9416C46.1414 10.8353 45.6709 10.551 45.3333 10.137C44.9957 9.72305 44.8118 9.20497 44.8128 8.67079V8.64162C45.1191 8.81454 45.4795 8.92079 45.8566 8.93537C45.5396 8.72411 45.2796 8.4379 45.0997 8.1021C44.9198 7.76631 44.8256 7.39132 44.8253 7.01038C44.8253 6.57913 44.9378 6.18538 45.1399 5.84371C45.721 6.55899 46.446 7.144 47.268 7.56072C48.0899 7.97744 48.9903 8.21653 49.9107 8.26246C49.5837 6.68954 50.7587 5.41663 52.1712 5.41663C52.8378 5.41663 53.4378 5.69579 53.8607 6.14579C54.3837 6.04788 54.8837 5.85204 55.3295 5.58954C55.1566 6.12496 54.7941 6.57704 54.3128 6.86246C54.7795 6.81246 55.2295 6.68329 55.6462 6.50204C55.3316 6.96454 54.9378 7.37496 54.4857 7.70204Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M17.667 1.66663H2.33366C1.96491 1.66663 1.66699 1.96454 1.66699 2.33329V17.6666C1.66699 18.0354 1.96491 18.3333 2.33366 18.3333H17.667C18.0357 18.3333 18.3337 18.0354 18.3337 17.6666V2.33329C18.3337 1.96454 18.0357 1.66663 17.667 1.66663ZM15.742 6.53121H14.4107C13.367 6.53121 13.1649 7.02704 13.1649 7.75621V9.36246H15.6566L15.3316 11.877H13.1649V18.3333H10.567V11.8791H8.39407V9.36246H10.567V7.50829C10.567 5.35621 11.8816 4.18329 13.8024 4.18329C14.7232 4.18329 15.5128 4.25204 15.7441 4.28329V6.53121H15.742Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="140" height="20" viewBox="0 0 140 20" fill="none">
                                    <path d="M137.986 6.11925C137.891 5.74115 137.705 5.39633 137.446 5.11932C137.188 4.84232 136.866 4.64283 136.513 4.54083C135.212 4.16663 130 4.16663 130 4.16663C130 4.16663 124.788 4.16663 123.488 4.53884C123.135 4.64051 122.812 4.83989 122.554 5.11694C122.295 5.394 122.109 5.73899 122.015 6.11726C121.667 7.51058 121.667 10.4166 121.667 10.4166C121.667 10.4166 121.667 13.3227 122.015 14.714C122.206 15.4823 122.772 16.0874 123.488 16.2924C124.788 16.6666 130 16.6666 130 16.6666C130 16.6666 135.212 16.6666 136.513 16.2924C137.231 16.0874 137.794 15.4823 137.986 14.714C138.334 13.3227 138.334 10.4166 138.334 10.4166C138.334 10.4166 138.334 7.51058 137.986 6.11925ZM128.345 13.0838V7.74943L132.66 10.3967L128.345 13.0838Z" fill="#AAAAAA" />
                                </svg>
                            </a>
                        </li> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="20"
              viewBox="0 0 140 20"
              fill="none"
            >
              <path
                d="M57.667 1.66663H42.3337C41.9649 1.66663 41.667 1.96454 41.667 2.33329V17.6666C41.667 18.0354 41.9649 18.3333 42.3337 18.3333H57.667C58.0357 18.3333 58.3337 18.0354 58.3337 17.6666V2.33329C58.3337 1.96454 58.0357 1.66663 57.667 1.66663ZM54.4857 7.70204C54.492 7.79996 54.492 7.90204 54.492 8.00204C54.492 11.0604 52.1628 14.5833 47.9066 14.5833C46.5941 14.5833 45.3774 14.202 44.3524 13.5458C44.5399 13.5666 44.7191 13.575 44.9107 13.575C45.9941 13.575 46.9899 13.2083 47.7837 12.5875C46.767 12.5666 45.9128 11.9 45.6212 10.9833C45.9774 11.0354 46.2982 11.0354 46.6649 10.9416C46.1414 10.8353 45.6709 10.551 45.3333 10.137C44.9957 9.72305 44.8118 9.20497 44.8128 8.67079V8.64162C45.1191 8.81454 45.4795 8.92079 45.8566 8.93537C45.5396 8.72411 45.2796 8.4379 45.0997 8.1021C44.9198 7.76631 44.8256 7.39132 44.8253 7.01038C44.8253 6.57913 44.9378 6.18538 45.1399 5.84371C45.721 6.55899 46.446 7.144 47.268 7.56072C48.0899 7.97744 48.9903 8.21653 49.9107 8.26246C49.5837 6.68954 50.7587 5.41663 52.1712 5.41663C52.8378 5.41663 53.4378 5.69579 53.8607 6.14579C54.3837 6.04788 54.8837 5.85204 55.3295 5.58954C55.1566 6.12496 54.7941 6.57704 54.3128 6.86246C54.7795 6.81246 55.2295 6.68329 55.6462 6.50204C55.3316 6.96454 54.9378 7.37496 54.4857 7.70204Z"
                fill="#AAAAAA"
              />
              <path
                d="M17.667 1.66663H2.33366C1.96491 1.66663 1.66699 1.96454 1.66699 2.33329V17.6666C1.66699 18.0354 1.96491 18.3333 2.33366 18.3333H17.667C18.0357 18.3333 18.3337 18.0354 18.3337 17.6666V2.33329C18.3337 1.96454 18.0357 1.66663 17.667 1.66663ZM15.742 6.53121H14.4107C13.367 6.53121 13.1649 7.02704 13.1649 7.75621V9.36246H15.6566L15.3316 11.877H13.1649V18.3333H10.567V11.8791H8.39407V9.36246H10.567V7.50829C10.567 5.35621 11.8816 4.18329 13.8024 4.18329C14.7232 4.18329 15.5128 4.25204 15.7441 4.28329V6.53121H15.742Z"
                fill="#AAAAAA"
              />
              <path
                d="M137.986 6.11925C137.891 5.74115 137.705 5.39633 137.446 5.11932C137.188 4.84232 136.866 4.64283 136.513 4.54083C135.212 4.16663 130 4.16663 130 4.16663C130 4.16663 124.788 4.16663 123.488 4.53884C123.135 4.64051 122.812 4.83989 122.554 5.11694C122.295 5.394 122.109 5.73899 122.015 6.11726C121.667 7.51058 121.667 10.4166 121.667 10.4166C121.667 10.4166 121.667 13.3227 122.015 14.714C122.206 15.4823 122.772 16.0874 123.488 16.2924C124.788 16.6666 130 16.6666 130 16.6666C130 16.6666 135.212 16.6666 136.513 16.2924C137.231 16.0874 137.794 15.4823 137.986 14.714C138.334 13.3227 138.334 10.4166 138.334 10.4166C138.334 10.4166 138.334 7.51058 137.986 6.11925ZM128.345 13.0838V7.74943L132.66 10.3967L128.345 13.0838Z"
                fill="#AAAAAA"
              />
              <path
                d="M89.9982 7.221C88.468 7.221 87.2193 8.46976 87.2193 9.99996C87.2193 11.5302 88.468 12.7789 89.9982 12.7789C91.5284 12.7789 92.7772 11.5302 92.7772 9.99996C92.7772 8.46976 91.5284 7.221 89.9982 7.221ZM98.333 9.99996C98.333 8.84918 98.3435 7.70883 98.2788 6.56013C98.2142 5.2259 97.9098 4.04177 96.9342 3.06611C95.9564 2.08836 94.7744 1.78608 93.4401 1.72145C92.2894 1.65682 91.149 1.66725 90.0003 1.66725C88.8495 1.66725 87.7092 1.65682 86.5605 1.72145C85.2263 1.78608 84.0421 2.09045 83.0665 3.06611C82.0887 4.04385 81.7864 5.2259 81.7218 6.56013C81.6572 7.71091 81.6676 8.85127 81.6676 9.99996C81.6676 11.1487 81.6572 12.2911 81.7218 13.4398C81.7864 14.774 82.0908 15.9581 83.0665 16.9338C84.0442 17.9116 85.2263 18.2138 86.5605 18.2785C87.7113 18.3431 88.8516 18.3327 90.0003 18.3327C91.1511 18.3327 92.2915 18.3431 93.4401 18.2785C94.7744 18.2138 95.9585 17.9095 96.9342 16.9338C97.9119 15.9561 98.2142 14.774 98.2788 13.4398C98.3455 12.2911 98.333 11.1507 98.333 9.99996ZM89.9982 14.2758C87.6321 14.2758 85.7224 12.3661 85.7224 9.99996C85.7224 7.63378 87.6321 5.72415 89.9982 5.72415C92.3644 5.72415 94.274 7.63378 94.274 9.99996C94.274 12.3661 92.3644 14.2758 89.9982 14.2758ZM94.4492 6.54763C93.8967 6.54763 93.4506 6.10149 93.4506 5.54903C93.4506 4.99658 93.8967 4.55044 94.4492 4.55044C95.0016 4.55044 95.4478 4.99658 95.4478 5.54903C95.4479 5.68022 95.4222 5.81014 95.3721 5.93137C95.322 6.0526 95.2484 6.16275 95.1556 6.25551C95.0629 6.34827 94.9527 6.42182 94.8315 6.47195C94.7103 6.52207 94.5803 6.54779 94.4492 6.54763Z"
                fill="#AAAAAA"
              />
            </svg>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col space-y-5">
          <h3 className="text-3xl font-semibold">Menu</h3>
          <div className="border-t border-yellow-400 px-6 border-2  transition-all duration-100  w-fit" />
          <ul className=" space-y-3">
            <li>
              <Link className="text-[#A1A1A1] hover:text-white" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="text-[#A1A1A1] hover:text-white" href="/menu">
                Our Menu
              </Link>
            </li>
            <li>
              <Link
                className="text-[#A1A1A1] hover:text-white "
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-3 flex flex-col space-y-5">
          <h3 className="text-3xl font-semibold">Find Us</h3>
          <div className="border-t border-yellow-400 px-6 border-2 transition-all duration-100  w-fit" />
          <ul className=" space-y-5 text-[#A1A1A1]">
            <li className=" flex gap-3 ">
              <span className="font-bold text-2xl text-white ">L.</span>
              <p> Braga Street 28, Bandung, West Java, Indonesia</p>
            </li>
            <li className=" flex gap-3 items-center">
              <span className="font-bold text-2xl text-white">P.</span>
              <p>+62 863812123</p>
            </li>
            <li className=" flex gap-3 items-center">
              <span className="font-bold text-2xl text-white">E.</span>
              <p>lezzatos@restaurant.com</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[#A1A1A1] border-t pt-10 border-[#A1A1A1]">
        © Copyright Dar d’jaj 2023, All right reserved.
      </div>
    </footer>
  );
};

export default Footer;
