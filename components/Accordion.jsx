import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function Accordion({type, content}) {
  return (
    <Popover className="relative z-20">
      <PopoverButton className="inline-flex items-center gap-x-1 outline-0 ring-0 border-0">
        <span className='hover:scale-110 transform transition duration-300 hover:text-cyan-400'>{content?.title}</span>
        {/* {type === "text" && <span className='text-[#003F7D] font-semibold'>{content?.title}</span>} */}
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className={`absolute w-screen left-1/2 max-w-max z-50 mt-5 flex -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in`}
      >
        <div className="max-w-md flex-auto overflow-hidden z-50 rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5">
          <div className="p-3 w-full z-40">
            {content?.content.map((item, index) => (
              <div key={index} className={`group relative flex gap-x-6 rounded-lg p-4 w-full text-start hover:bg-gray-100 ${index !== 0 && "border-t border-gray-200"}`}>
                {/* <div className="mt-1 flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                  <item.icon aria-hidden="true" className="size-6 text-gray-600 group-hover:text-indigo-600" />
                </div> */}
                <div className='w-full pr-14'>
                  <a href={item.href} className="font-semibold text-gray-900">
                    {item.name}
                    <span className="absolute inset-0" />
                  </a>
                  {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                </div>
              </div>
            ))}
            {/* {type === "text" && <span className='z-40'>{content?.content}</span>} */}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
