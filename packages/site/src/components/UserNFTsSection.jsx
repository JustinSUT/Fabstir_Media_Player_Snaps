import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import {
  PlusSmallIcon as PlusSmIconOutline,
  Bars4Icon,
  Squares2X2Icon,
  ChevronDoubleDownIcon,
} from '@heroicons/react/24/solid';

import UserNFTsView from './UserNFTsView';
import useNFTs from '../hooks/useNFTs';
import { nftslideoverstate } from '../atoms/nftSlideOverAtom';

/**
 * UserNFTsSection component to render the user's NFTs section.
 * It receives the user's NFT addresses and styles as props, uses the useNFTs hook to fetch the NFT metadata for each address,
 * filters the NFTs based on the selected filters, and renders the UserNFTsView component to display the filtered NFTs.
 *
 * @component
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.nftAddresseObjects - The NFT address objects.
 * @param {string} props.theTitle - The title for the section.
 * @param {string} props.twStyle - Tailwind CSS style for the component.
 * @param {string} props.twTitleStyle - Tailwind CSS style for the title.
 * @param {string} props.twTextStyle - Tailwind CSS style for the text.
 * @returns {React.Element} The rendered UserNFTsSection component.
 */
export default function UserNFTsSection({
  theTitle,
  twStyle,
  twTitleStyle,
  twTextStyle,
}) {
  /**
   * Fetches NFT metadata for each address using the useNFTs hook.
   * @type {Object}
   */
  const nfts = useNFTs();

  /**
   * State to control the visibility of the NFT slide over component.
   * @type {[boolean, Function]}
   */
  const [openNFT, setOpenNFT] = useRecoilState(nftslideoverstate);

  /**
   * State to hold the filtered user NFTs.
   * @type {[Array, Function]}
   */
  const [filteredUserNFTs, setFilteredUserNFTs] = useState();

  useEffect(() => {
    setFilteredUserNFTs(nfts.data);
    console.log('UserNFTsSection: nfts.data = ', nfts.data);
  }, [nfts, nfts.data]);

  // Render UserNFTsView component to display filtered NFTs
  return (
    <main className="h-screen flex-1 rounded-sm bg-fabstir-light-purple">
      <div className="flex border-t border-fabstir-medium-light-gray pt-6">
        <h1 className="flex-1 text-2xl font-bold text-fabstir-light-gray">
          {theTitle}
        </h1>

        <button
          type="button"
          onClick={() => setOpenNFT(true)}
          className="f-full focus:ring-fabstir-colour1 m-3 flex items-center justify-center rounded-full bg-fabstir-action-colour1 p-1 px-2 text-fabstir-light-gray shadow-lg shadow-fabstir-light-purple/50 hover:bg-indigo-700 focus:outline-none focus:ring-2"
        >
          <PlusSmIconOutline
            className="h-6 w-6 focus:ring-0"
            aria-hidden="true"
          />
          <span className="sr-only">Add file</span>
        </button>

        <div className="ml-6 flex items-center rounded-lg p-0.5 sm:hidden">
          <button type="button" className="rounded-md p-1.5">
            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Use list view</span>
          </button>
          <button
            type="button"
            className="ml-0.5 rounded-md p-1.5 text-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <Bars4Icon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Use grid view</span>
          </button>
        </div>
      </div>

      {/* Gallery */}
      <section className="mt-4 pb-16" aria-labelledby="gallery-heading">
        {filteredUserNFTs && (
          <UserNFTsView
            nfts={filteredUserNFTs}
            twStyle={twStyle}
            twTitleStyle={twTitleStyle}
            twTextStyle={twTextStyle}
          />
        )}
      </section>
    </main>
  );
}
