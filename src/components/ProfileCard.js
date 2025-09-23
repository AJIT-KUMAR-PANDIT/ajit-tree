'use client';

import Image from 'next/image';

const ProfileCard = ({ profile }) => {
  return (
    <div className="text-center mb-8 animate-fade-in">
      {/* Avatar */}
      <div className="relative mx-auto mb-4 w-32 h-32">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full p-1 animate-pulse">
          <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
            {profile.avatar ? (
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={120}
                height={120}
                className="w-28 h-28 rounded-full object-cover"
                priority
              />
            ) : (
              <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-3xl font-bold">
                {profile.name?.charAt(0) || 'A'}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Name */}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2 animate-slide-up">
        {profile.name}
      </h1>

      {/* Username */}
      <p className="text-lg text-purple-600 dark:text-purple-400 mb-3 animate-slide-up delay-100">
        {profile.username}
      </p>

      {/* Bio */}
      <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto leading-relaxed animate-slide-up delay-200">
        {profile.bio}
      </p>
    </div>
  );
};

export default ProfileCard;