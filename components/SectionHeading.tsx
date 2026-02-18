export default function SectionHeading({ title, subTitle }: { title: string, subTitle?: string }) {
    return (
        <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl lg:text-4xl font-bold font-zilla text-heading mt-3 mb-4">
                {title}
            </h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full" />
            {subTitle && (
                <p className="mt-6 max-w-4xl mx-auto text-gray-600 text-lg font-source leading-relaxed">{subTitle}</p>
            )}
        </div>
    )
}