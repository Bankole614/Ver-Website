import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'
import Question from './assets/question.jpg'

const SixthSection = () => {
  return (
    <>
      <div className='py-16' id='About'>
        <div className='container'>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 justify- items-center'>
            <div className=" w-full px-4">
              <div className=" w-full max-w-lg divide-y divide-green-400 rounded-xl border border-green-600">
                <Disclosure as="div" className="p-4" >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-sm text-left font-medium text-green-600">
                      What is Ver?
                    </span>
                    <FaChevronDown className="size-5 text-green-400  group-data-[open]:rotate-180 transition-all duration-300" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm text-green-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aspernatur possimus esse nam voluptas est quo temporibus. Iste, fugit laudantium!
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-4" >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-sm text-left font-medium text-green-600">
                    How does Ver Work?
                    </span>
                    <FaChevronDown className="size-5 text-green-400  group-data-[open]:rotate-180 transition-all duration-300" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm text-green-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aspernatur possimus esse nam voluptas est quo temporibus. Iste, fugit laudantium!
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-4" >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-left text-green-600">
                      Who can use Ver
                    </span>
                    <FaChevronDown className="size-5 text-green-400  group-data-[open]:rotate-180 transition-all duration-300" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm text-green-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aspernatur possimus esse nam voluptas est quo temporibus. Iste, fugit laudantium!
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-4" >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-green-600 text-left">
                      What Kind of items can I give or recieve on Ver?
                    </span>
                    <FaChevronDown className="size-5 text-green-400  group-data-[open]:rotate-180 transition-all duration-300" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm text-green-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aspernatur possimus esse nam voluptas est quo temporibus. Iste, fugit laudantium!
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure as="div" className="p-4" >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-sm font-medium text-green-600 text-left">
                      How are items exchanged?
                    </span>
                    <FaChevronDown className="size-5 text-green-400  group-data-[open]:rotate-180 transition-all duration-300" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 text-sm text-green-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt aspernatur possimus esse nam voluptas est quo temporibus. Iste, fugit laudantium!
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
            <div className='flex justify-center'>
              <img className='h-64' src={Question} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SixthSection