import { Store } from '@/types/store';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/Avatar';
import { Button } from '../ui/Button';
import Image from 'next/image';

interface StoreProfileProps {
  store: Store;
  className?: string;
}

export default function StoreProfile({ store, className }: StoreProfileProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <Card>
        {store.banner && (
          <div className="h-48 relative overflow-hidden rounded-t-lg">
            <Image
              src={store.banner}
              alt={`${store.name} banner`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            {/* Store Logo */}
            <Avatar className="flex-shrink-0 h-16 w-16">
              <AvatarImage src={store.logo} alt={store.name} />
              <AvatarFallback>{store.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              {/* Store Name and Status */}
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold">{store.name}</h1>
                {store.isVerified && (
                  <Badge variant="default">✓ Verified</Badge>
                )}
                <Badge variant={store.isActive ? 'default' : 'secondary'}>
                  {store.isActive ? 'Open' : 'Closed'}
                </Badge>
              </div>

              {/* Category */}
              <Badge variant="secondary" className="mb-3">
                {store.category}
              </Badge>

              {/* Description */}
              <p className="text-muted-foreground mb-4">{store.description}</p>

              {/* Store Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-yellow-500">⭐</span>
                    <span className="font-semibold">
                      {store.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {store.reviewCount} reviews
                  </p>
                </div>

                <div className="text-center">
                  <div className="font-semibold">{store.productCount}</div>
                  <p className="text-xs text-muted-foreground">products</p>
                </div>

                <div className="text-center">
                  <div className="font-semibold">
                    {new Date(store.createdAt).getFullYear()}
                  </div>
                  <p className="text-xs text-muted-foreground">since</p>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button>Follow Store</Button>
                <Button variant="outline">Contact</Button>
                <Button variant="outline">Share</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span className="text-sm">{store.contact.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span className="text-sm">{store.contact.phone}</span>
            </div>
            {store.contact.website && (
              <div className="flex items-center space-x-2">
                <span>🌐</span>
                <a
                  href={store.contact.website}
                  className="text-sm text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {store.contact.website}
                </a>
              </div>
            )}
            {store.contact.supportHours && (
              <div className="flex items-center space-x-2">
                <span>🕒</span>
                <span className="text-sm">{store.contact.supportHours}</span>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Location */}
        <Card>
          <CardHeader>
            <CardTitle>Location</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>{store.address.street}</div>
              <div>
                {store.address.city}, {store.address.state}{' '}
                {store.address.zipCode}
              </div>
              <div>{store.address.country}</div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        {store.socialMedia && (
          <Card>
            <CardHeader>
              <CardTitle>Follow Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-3">
                {store.socialMedia.facebook && (
                  <a
                    href={store.socialMedia.facebook}
                    className="text-blue-600 hover:underline"
                  >
                    Facebook
                  </a>
                )}
                {store.socialMedia.twitter && (
                  <a
                    href={store.socialMedia.twitter}
                    className="text-blue-400 hover:underline"
                  >
                    Twitter
                  </a>
                )}
                {store.socialMedia.instagram && (
                  <a
                    href={store.socialMedia.instagram}
                    className="text-pink-600 hover:underline"
                  >
                    Instagram
                  </a>
                )}
                {store.socialMedia.linkedin && (
                  <a
                    href={store.socialMedia.linkedin}
                    className="text-blue-700 hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Policies */}
        <Card>
          <CardHeader>
            <CardTitle>Store Policies</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-medium text-sm">Returns</h4>
              <p className="text-sm text-muted-foreground">
                {store.policies.returns}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Shipping</h4>
              <p className="text-sm text-muted-foreground">
                {store.policies.shipping}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Privacy</h4>
              <p className="text-sm text-muted-foreground">
                {store.policies.privacy}
              </p>
            </div>
            <div>
              <h4 className="font-medium text-sm">Terms</h4>
              <p className="text-sm text-muted-foreground">
                {store.policies.terms}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
