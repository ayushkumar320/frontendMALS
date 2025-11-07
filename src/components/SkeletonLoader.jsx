export function SkeletonLoader({ layout = 'landing' }) {
  // Landing Page Skeleton - Matches your page design
  const LandingPageSkeleton = () => (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Decorative Cards Skeleton - Right Side */}
      <div className="absolute top-8 right-[600px] w-56 h-72 transform -rotate-6 z-0">
        <div className="w-full h-full bg-gray-200 rounded-lg shadow-2xl border-8 border-white animate-pulse"></div>
      </div>

      <div className="absolute top-16 right-96 w-48 h-32 transform rotate-12 z-0">
        <div className="w-full h-full bg-gray-200 rounded-lg shadow-2xl border-8 border-white animate-pulse flex items-center justify-center">
          <div className="h-4 bg-gray-300 rounded w-24"></div>
        </div>
      </div>

      <div className="absolute top-32 right-72 w-64 h-64 transform rotate-6 z-10">
        <div className="w-full h-full bg-gray-200 rounded-lg shadow-2xl border-8 border-white animate-pulse overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
        </div>
      </div>

      <div className="absolute top-80 right-80 w-72 h-80 transform -rotate-3 z-5">
        <div className="w-full h-full bg-gray-200 rounded-lg shadow-2xl border-8 border-white animate-pulse overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
        </div>
      </div>

      <div className="absolute bottom-32 right-[550px] w-60 h-80 transform rotate-3 z-0">
        <div className="w-full h-full bg-gray-200 rounded-lg shadow-2xl border-8 border-white animate-pulse"></div>
      </div>

      <div className="absolute top-64 right-20 w-52 h-64 transform -rotate-12 z-0">
        <div className="w-full h-full bg-gray-200 rounded-lg shadow-2xl border-8 border-white animate-pulse"></div>
      </div>

      {/* Main Content Skeleton */}
      <div className="relative z-50 container mx-auto px-8 py-20 mt-8">
        <div className="max-w-3xl space-y-8 animate-pulse">
          {/* Title Skeleton */}
          <div className="space-y-3">
            <div className="h-12 bg-gray-300 rounded-lg w-2/3 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
          </div>

          {/* Motto/Heading Skeleton */}
          <div className="space-y-4">
            <div className="h-16 bg-gray-300 rounded-lg w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
            <div className="h-16 bg-gray-300 rounded-lg w-4/5 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
          </div>

          {/* Description Skeleton */}
          <div className="space-y-3">
            <div className="h-5 bg-gray-200 rounded w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
            </div>
            <div className="h-5 bg-gray-200 rounded w-5/6 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
            </div>
          </div>

          {/* Slogan Skeleton */}
          <div className="h-6 bg-gray-300 rounded w-48 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>

          {/* Buttons Skeleton */}
          <div className="flex gap-4 flex-wrap pt-4">
            <div className="h-12 bg-gray-300 rounded w-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
            <div className="h-12 bg-gray-300 rounded w-40 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
            <div className="h-12 bg-gray-300 rounded w-36 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Diagonal Bottom Section Skeleton */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gray-200 transform -skew-y-2 origin-bottom-left animate-pulse"></div>
    </section>
  );

  // Blog Card Skeleton
  const BlogCardSkeleton = () => (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="relative bg-gray-300 overflow-hidden h-48">
        <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
      </div>

      <div className="p-6 space-y-4">
        <div className="h-3 bg-gray-300 rounded w-24 overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
        </div>

        <div className="space-y-2">
          <div className="h-6 bg-gray-300 rounded w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
          <div className="h-6 bg-gray-300 rounded w-4/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-3/4 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
          <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden relative shrink-0">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="h-3 bg-gray-300 rounded w-32 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-24 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Featured Blog Skeleton
  const FeaturedBlogSkeleton = () => (
    <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="md:w-2/5 shrink-0 bg-gray-300 h-64 md:h-auto overflow-hidden relative">
        <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
      </div>

      <div className="flex-1 p-6 space-y-4">
        <div className="h-4 bg-gray-300 rounded w-32 overflow-hidden relative">
          <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
        </div>

        <div className="space-y-3">
          <div className="h-8 bg-gray-300 rounded w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
          <div className="h-8 bg-gray-300 rounded w-3/4 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-full overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-5/6 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
            <div className="h-3 bg-gray-300 rounded w-24 overflow-hidden relative">
              <div className="absolute inset-0 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
            </div>
          </div>
          <div className="h-3 bg-gray-200 rounded w-20 overflow-hidden relative">
            <div className="absolute inset-0 bg-linear-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // Render based on layout type
  if (layout === 'landing') {
    return <LandingPageSkeleton />;
  }

  if (layout === 'single') {
    return <BlogCardSkeleton />;
  }

  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (layout === 'list' || layout === 'featured') {
    return (
      <div className="space-y-6 p-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <FeaturedBlogSkeleton key={index} />
        ))}
      </div>
    );
  }

  return null;
}
